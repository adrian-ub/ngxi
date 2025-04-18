import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsWrenchIcon],svg[zondicons-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.47 9.8A5 5 0 0 1 .2 3.22l3.95 3.95l2.82-2.83L3.03.41a5 5 0 0 1 6.4 6.68l10 10l-2.83 2.83z"></svg:path>`,
})
export class ZondiconsWrenchIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
