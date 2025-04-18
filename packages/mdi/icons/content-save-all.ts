import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveAllIcon],svg[mdi-content-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7V3H7v4zm-3 10a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m5-16l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM1 7h2v14h14v2H3a2 2 0 0 1-2-2z"></svg:path>`,
})
export class MdiContentSaveAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
