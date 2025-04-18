import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPhoneNegativeIcon],svg[healthicons-phone-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPhoneNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM26.42 34.76c-5.66-2.9-10.3-7.52-13.18-13.18l4.4-4.4c.56-.56.72-1.34.5-2.04A22.7 22.7 0 0 1 17 8c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2c0 18.78 15.22 34 34 34c1.1 0 2-.9 2-2v-6.98c0-1.1-.9-2-2-2c-2.48 0-4.9-.4-7.14-1.14c-.7-.24-1.5-.06-2.04.48z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPhoneNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPhoneNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
