import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginTestOutlineIcon],svg[bubbles-plugin-test-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.5 23.749l-1.9-3.326a2.263 2.263 0 0 1 3.848-2.378l1.8 2.7V9.5a2.25 2.25 0 0 1 4.5 0v8.25h3.379a4.33 4.33 0 0 1 4.123 4.35v1.653M18.5 1.249l5.25 5.25m-5.25 0l5.25-5.25M8 1.249l-3.75 5.25l-3-3"></svg:path>`,
})
export class BubblesPluginTestOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
