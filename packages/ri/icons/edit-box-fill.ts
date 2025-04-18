import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEditBoxFillIcon],svg[ri-edit-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.757 2.997l-7.466 7.466l.008 4.247l4.238-.008L21 7.24v12.758a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1zm3.728-.9L21.9 3.511l-9.193 9.193l-1.412.002l-.002-1.416z"></svg:path>`,
})
export class RiEditBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
