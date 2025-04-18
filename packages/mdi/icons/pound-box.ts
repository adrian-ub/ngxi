import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPoundBoxIcon],svg[mdi-pound-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm4 13h2l.35-2h4L13 18h2l.35-2h2l.36-2h-2l.7-4h2l.35-2h-2l.36-2h-2l-.36 2h-4l.36-2h-2l-.36 2h-2l-.35 2h2l-.7 4h-2l-.36 2h2zm3.41-8h4l-.7 4h-4z"></svg:path>`,
})
export class MdiPoundBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
