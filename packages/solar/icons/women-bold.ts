import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWomenBoldIcon],svg[solar-women-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 15.96a7.001 7.001 0 1 0-1.5 0v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 1 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class SolarWomenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
