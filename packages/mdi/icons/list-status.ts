import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiListStatusIcon],svg[mdi-list-status-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 11L13 7.5l1.4-1.4l2.1 2.1L20.7 4l1.4 1.4zM11 7H2v2h9zm10 6.4L19.6 12L17 14.6L14.4 12L13 13.4l2.6 2.6l-2.6 2.6l1.4 1.4l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6zM11 15H2v2h9z"></svg:path>`,
})
export class MdiListStatusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
