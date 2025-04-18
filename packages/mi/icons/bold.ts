import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miBoldIcon],svg[mi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6.5a4.5 4.5 0 0 0 1.545-8.728A4.5 4.5 0 0 0 11.5 4zm4.5 7H8V6h3.5a2.5 2.5 0 0 1 0 5M8 13h5.5a2.5 2.5 0 0 1 0 5H8z"></svg:path>`,
})
export class MiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
