import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Hero } from "../hero";
import { HeroInformationService } from "./hero-information.service";

@Component({
  selector: "app-hero-information",
  templateUrl: "./hero-information.component.html",
  styleUrls: ["./hero-information.component.css"],
  providers: [HeroInformationService]
})
export class HeroInformationComponent implements OnInit {
  private hero: Hero;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroInformationService: HeroInformationService
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      setTimeout(() => {
        this.hero = this._heroInformationService.getHeroById(params["id"])[0];
      }, 1000);
    });
  }
}
