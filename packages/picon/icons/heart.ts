import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHeartIcon],svg[picon-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 8l2-2c4-4-1-6-2-3c-1-3-6-1-2 3"></svg:path>`,
})
export class PiconHeartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
