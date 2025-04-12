import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsFaceFrown16SolidIcon],svg[heroicons-face-frown-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6 8c.552 0 1-.672 1-1.5S6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8m5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5m-6.005 5.805a.75.75 0 0 0 1.06 0a2.75 2.75 0 0 1 3.89 0a.75.75 0 0 0 1.06-1.06a4.25 4.25 0 0 0-6.01 0a.75.75 0 0 0 0 1.06" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsFaceFrown16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
