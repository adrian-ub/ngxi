import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsAdjustIcon],svg[zondicons-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v16a8 8 0 1 0 0-16m0 18a10 10 0 1 1 0-20a10 10 0 0 1 0 20"></svg:path>`,
})
export class ZondiconsAdjustIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
