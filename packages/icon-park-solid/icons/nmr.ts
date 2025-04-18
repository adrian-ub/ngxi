import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidNmrIcon],svg[icon-park-solid-nmr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke-linecap="round" d="M32.485 15.515A11.96 11.96 0 0 0 24 12a11.96 11.96 0 0 0-8.485 3.515"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M34 24H14v8h20z"></svg:path><svg:path stroke-linecap="round" d="M17.045 32L17 42.715M31.046 32L31 42.715"></svg:path></svg:g>`,
})
export class IconParkSolidNmrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
