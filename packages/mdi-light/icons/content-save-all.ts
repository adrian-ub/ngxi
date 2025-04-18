import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightContentSaveAllIcon],svg[mdi-light-content-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h10.59L20 6.41V17a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6.91L16.09 4H15v5H6zm1 0v4h7V4zm5 7a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M6 22a5 5 0 0 1-5-5V7h1v10a4 4 0 0 0 4 4h10v1z"></svg:path>`,
})
export class MdiLightContentSaveAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
