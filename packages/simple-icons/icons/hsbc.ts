import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHsbcIcon],svg[simple-icons-hsbc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 12.007l-5.996 5.997V5.996zm-5.996-6.01H6.01l5.996 6.01l5.997-6.01zM0 12.006l6.01 5.997V5.996zm6.01 5.997h11.994l-5.997-5.997z"></svg:path>`,
})
export class SimpleIconsHsbcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
