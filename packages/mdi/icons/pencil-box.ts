import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPencilBoxIcon],svg[mdi-pencil-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-2.3 6.35c.22-.21.22-.56 0-.77L15.42 7.3a.53.53 0 0 0-.77 0l-1 1l2.05 2.05zM7 14.94V17h2.06l6.06-6.06l-2.06-2.06z"></svg:path>`,
})
export class MdiPencilBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
