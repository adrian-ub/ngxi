import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignSpaceEvenlyHorizontal24RegularIcon],svg[fluent-align-space-evenly-horizontal-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 17.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm1 2.5A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4h1A2.5 2.5 0 0 1 8 6.5v11A2.5 2.5 0 0 1 5.5 20zm6-2.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1zm1 2.5A2.5 2.5 0 0 1 9 17.5v-11A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5v11a2.5 2.5 0 0 1-2.5 2.5zm7-1.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1zm-2.5-1a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-1A2.5 2.5 0 0 0 16 6.5z"></svg:path>`,
})
export class FluentAlignSpaceEvenlyHorizontal24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
