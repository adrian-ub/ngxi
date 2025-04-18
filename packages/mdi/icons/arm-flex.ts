import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArmFlexIcon],svg[mdi-arm-flex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.34S4 7.09 7 3l5 1l-1 3.09H9v7.16h1c2-3.07 6.14-4.19 8.64-3.07c3.3 1.53 3 6.14 0 8.18C16.24 21 9 22.43 3 18.34"></svg:path>`,
})
export class MdiArmFlexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
