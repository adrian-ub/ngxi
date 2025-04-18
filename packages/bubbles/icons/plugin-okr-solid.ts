import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginOkrSolidIcon],svg[bubbles-plugin-okr-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.396 20.867a5.3 5.3 0 0 0 1.425 1.82m2.834 1.153a5.3 5.3 0 0 0 2.291-.3m2.438-1.853a5.1 5.1 0 0 0 .908-2.123M11.32 4.259a5.15 5.15 0 0 0-1.558-1.853M6.729 1.369a5.15 5.15 0 0 0-2.364.516m-2.332 2.2a5.26 5.26 0 0 0-.638 2.335m14.988 5.444h-15m12.136-2.863l2.864 2.863l-2.864 2.864"></svg:path><svg:path fill="currentColor" d="M21.362 9.617a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path></svg:g>`,
})
export class BubblesPluginOkrSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
