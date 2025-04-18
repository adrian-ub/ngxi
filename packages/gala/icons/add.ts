import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaAddIcon],svg[gala-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:circle cx="128" cy="128" r="112"></svg:circle><svg:path d="M 79.999992,128 H 176.0001"></svg:path><svg:path d="m 128.00004,79.99995 v 96.0001"></svg:path></svg:g>`,
})
export class GalaAddIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
