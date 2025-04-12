import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsMinusCircleSolidIcon],svg[heroicons-minus-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsMinusCircleSolidIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
