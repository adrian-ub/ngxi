import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSNotzIcon],svg[arcticons-s-notz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39 5H9a4 4 0 0 0-4 4v30a4 4 0 0 0 4 4h23.56V32.56H43V9a4 4 0 0 0-4-4m-6.44 38L43 32.56M10.5 14h27m-27 10h27m-27 10h16.06"></svg:path>`,
})
export class ArcticonsSNotzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
