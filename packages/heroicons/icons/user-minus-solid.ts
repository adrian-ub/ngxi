import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsUserMinusSolidIcon],svg[heroicons-user-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25a4.125 4.125 0 0 0 0-8.25m0 9.75a7.125 7.125 0 0 0-7.124 7.247a.75.75 0 0 0 .363.63a13.07 13.07 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12M16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`
})
export class HeroiconsUserMinusSolidIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
