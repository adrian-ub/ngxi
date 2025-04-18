import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightAlertOctagonIcon],svg[mdi-light-alert-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16V9l5-5h7l5 5v7.03L15.03 21H8zM8.39 5L4 9.39v6.21L8.4 20h6.21L19 15.61V9.39L14.61 5zM11 8h1v5h-1zm0 7h1v2h-1z"></svg:path>`,
})
export class MdiLightAlertOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
