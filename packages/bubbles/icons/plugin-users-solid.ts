import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginUsersSolidIcon],svg[bubbles-plugin-users-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.375 8.375a4.125 4.125 0 1 0 8.25 0a4.125 4.125 0 0 0-8.25 0M.75 20.75a6.75 6.75 0 0 1 13.5 0"></svg:path><svg:path fill="currentColor" d="M12.625 8.375a4.125 4.125 0 1 0 8.25 0a4.125 4.125 0 0 0-8.25 0M10 20.75a6.75 6.75 0 0 1 13.5 0"></svg:path><svg:path d="M14.251 4.916a4.125 4.125 0 1 1-.006 6.914M16 14.167a6.758 6.758 0 0 1 8.25 6.583"></svg:path></svg:g>`,
})
export class BubblesPluginUsersSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
