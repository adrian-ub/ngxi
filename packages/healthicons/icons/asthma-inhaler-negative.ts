import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAsthmaInhalerNegativeIcon],svg[healthicons-asthma-inhaler-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsAsthmaInhalerNegative0)"><svg:path d="m8.847 9.778l1.162 4.333l5.54-2.519l-.903-3.367z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM16.32 6.741a1 1 0 0 0-1.225-.707l-7.733 2.07a1 1 0 0 0-.708 1.225l1.508 5.622l-1.076.489a1 1 0 0 0-.55 1.174l5.68 20.708A5 5 0 0 0 17.04 41H30a1 1 0 0 0 1-1V28a1 1 0 0 0-1-1h-6.175l-4.276-15.947a1 1 0 0 0-1.381-.651l-.772.35zM35 29h-2v10h2zm4 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAsthmaInhalerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAsthmaInhalerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
