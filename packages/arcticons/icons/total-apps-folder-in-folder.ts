import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTotalAppsFolderInFolderIcon],svg[arcticons-total-apps-folder-in-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.138 36.57v3.062h-29.3a2.334 2.334 0 0 1-2.338-2.33h0V14.696h3.056V36.57zM12.113 10.698a2.334 2.334 0 0 1 2.337-2.33h6.793c.65 0 1.283.202 1.812.579l3.828 2.725c.53.377 1.163.58 1.812.579h11.468a2.334 2.334 0 0 1 2.337 2.33v15.531a2.334 2.334 0 0 1-2.337 2.33H14.45a2.334 2.334 0 0 1-2.337-2.33z"></svg:path>`,
})
export class ArcticonsTotalAppsFolderInFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
