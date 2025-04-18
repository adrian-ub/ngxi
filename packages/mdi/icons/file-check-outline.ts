import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileCheckOutlineIcon],svg[mdi-file-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.5 17l-5 5l-3.5-3.5l1.5-1.5l2 2l3.5-3.5zm-10.41 3H6V4h7v5h5v4.09c.33-.05.66-.09 1-.09s.67.04 1 .09V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.35-.61-.6-1.28-.72-2"></svg:path>`,
})
export class MdiFileCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
