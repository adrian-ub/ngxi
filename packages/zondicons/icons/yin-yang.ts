import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsYinYangIcon],svg[zondicons-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m0-18a8 8 0 1 0 0 16a4 4 0 1 1 0-8a4 4 0 1 0 0-8m0 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class ZondiconsYinYangIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
