import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginOkrsOutlineIcon],svg[bubbles-plugin-okrs-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.26 20.732a5.3 5.3 0 0 0 1.425 1.819m2.835 1.154a5.3 5.3 0 0 0 2.29-.3m2.439-1.853a5.1 5.1 0 0 0 .908-2.123M11.185 4.124A5.15 5.15 0 0 0 9.627 2.27M6.594 1.234a5.15 5.15 0 0 0-2.364.516m-2.332 2.2a5.26 5.26 0 0 0-.638 2.335m14.987 5.444h-15m12.137-2.863l2.863 2.863l-2.863 2.864m8.114-5.114a2.25 2.25 0 1 0 0 4.498a2.25 2.25 0 0 0 0-4.498"></svg:path>`,
})
export class BubblesPluginOkrsOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
