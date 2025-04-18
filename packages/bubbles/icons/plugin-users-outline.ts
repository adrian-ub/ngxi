import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginUsersOutlineIcon],svg[bubbles-plugin-users-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.375 8.375a4.125 4.125 0 1 0 8.25 0a4.125 4.125 0 0 0-8.25 0M.75 20.75a6.75 6.75 0 0 1 13.5 0m.001-15.834a4.125 4.125 0 1 1-.006 6.914M15 14.167a6.758 6.758 0 0 1 8.25 6.583"></svg:path>`,
})
export class BubblesPluginUsersOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
