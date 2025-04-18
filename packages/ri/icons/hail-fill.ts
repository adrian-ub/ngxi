import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHailFillIcon],svg[ri-hail-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.995 17.794a4 4 0 0 0-5.085-3.644A4.001 4.001 0 0 0 6 15c0 1.08.428 2.059 1.122 2.778a8 8 0 1 1 9.335-10.68a5.5 5.5 0 0 1 2.537 10.696M10 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5 3a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-5 3a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiHailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
