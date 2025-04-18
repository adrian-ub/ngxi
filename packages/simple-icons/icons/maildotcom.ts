import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMaildotcomIcon],svg[simple-icons-maildotcom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.017-.008H0V15.66c0 1.406.96 2.571 2.246 2.914L24 24.01V5.99c.017-3.308-2.674-6-5.983-6zm3 15.668H18V8.786c0-.669-.223-2.229-2.211-2.229c-1.32 0-2.28.909-2.28 2.229v6.874H10.49V8.786c0-.669-.205-2.229-2.194-2.229c-1.354 0-2.28.909-2.28 2.229v6.874H3V3.609h5.297c1.594 0 2.897.634 3.737 1.662c.892-1.028 2.212-1.662 3.737-1.662C19.063 3.609 21 5.786 21 8.854z"></svg:path>`,
})
export class SimpleIconsMaildotcomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
