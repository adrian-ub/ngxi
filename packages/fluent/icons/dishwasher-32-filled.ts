import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDishwasher32FilledIcon],svg[fluent-dishwasher-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5V12H3zm8.768 6.732A2.5 2.5 0 0 0 11.5 14H29v10.5a4.5 4.5 0 0 1-4.5 4.5h-14A2.5 2.5 0 0 0 9 26.708v-2.002a6 6 0 0 0 3.5-5.456V16a2.5 2.5 0 0 0-.732-1.768M11.5 8a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M17 7a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zM3 15a1 1 0 0 0-1 1v3.25a4.5 4.5 0 0 0 3.5 4.389V28H5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-.5v-4.361A4.5 4.5 0 0 0 11 19.25V16a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentDishwasher32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
