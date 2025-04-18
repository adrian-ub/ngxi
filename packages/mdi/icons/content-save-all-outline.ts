import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveAllOutlineIcon],svg[mdi-content-save-all-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h2v14h14v2H3a2 2 0 0 1-2-2zm18-6H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5zm2 16H7V3h11.17L21 5.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M8 4h9v4H8z"></svg:path>`,
})
export class MdiContentSaveAllOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
