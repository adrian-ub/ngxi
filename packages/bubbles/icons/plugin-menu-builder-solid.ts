import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginMenuBuilderSolidIcon],svg[bubbles-plugin-menu-builder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M24.25 7a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1z"></svg:path><svg:path d="M21.25 13a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1zm-3 6a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1z"></svg:path></svg:g>`,
})
export class BubblesPluginMenuBuilderSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
