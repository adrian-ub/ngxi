import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStudyViewIcon],svg[carbon-study-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 20h-3v-2h3V4H14v3h-2V4a2.002 2.002 0 0 1 2-2h14a2.002 2.002 0 0 1 2 2v14a2.003 2.003 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M17 22v-2h-4v-2h3v-2h-3v-2h-2v2H8v2h3v2H7v2h4v2H8v2h8v-2h-3v-2h4z" fill="currentColor"></svg:path><svg:path d="M20 30H4a2.002 2.002 0 0 1-2-2V12a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v16a2.002 2.002 0 0 1-2 2zM4 12v16h16V12z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
