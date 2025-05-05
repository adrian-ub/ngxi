import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBoomerangIcon],svg[picon-boomerang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-7-1-7-3 2-2c1 9-1 9-2 2M4 3L3 1H2m3 3l2 2V5"></svg:path>`,
})
export class PiconBoomerangIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
