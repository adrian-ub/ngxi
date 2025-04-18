import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBoltIcon],svg[gg-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 21.5l8.5-8.5l-4.5-3l2-7.5L6.5 11l4.5 3z"></svg:path>`,
})
export class GgBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
