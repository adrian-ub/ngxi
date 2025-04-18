import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadioButtonIcon],svg[hugeicons-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 12.25C3.75 7.69 7.44 4 12 4s8.25 3.69 8.25 8.25S16.56 20.5 12 20.5s-8.25-3.69-8.25-8.25M12 2.5c-5.38 0-9.75 4.37-9.75 9.75S6.62 22 12 22s9.75-4.37 9.75-9.75S17.38 2.5 12 2.5m-3.25 9.75C8.75 10.46 10.21 9 12 9s3.25 1.46 3.25 3.25S13.79 15.5 12 15.5s-3.25-1.46-3.25-3.25M12 7.5c-2.62 0-4.75 2.13-4.75 4.75S9.38 17 12 17s4.75-2.13 4.75-4.75S14.62 7.5 12 7.5" color="currentColor"></svg:path>`,
})
export class HugeiconsRadioButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
