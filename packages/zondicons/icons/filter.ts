import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsFilterIcon],svg[zondicons-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12l8-8V0H0v4l8 8v8l4-4z"></svg:path>`,
})
export class ZondiconsFilterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
