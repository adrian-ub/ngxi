import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyOffOutlineIcon],svg[mdi-flask-empty-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l6.8 6.8l-4.4 7.6c-.3.4-.5 1-.5 1.6c0 1.7 1.3 3 3 3h12c.6 0 1.2-.2 1.6-.5l1.2 1.2zM18 20H6c-.6 0-1-.4-1-1c0-.2.1-.4.2-.6l4.2-7.2zc.1 0 0 0 0 0M11 7.8l-3-3V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1c0 .6-.4 1-1 1v1.8l5.4 9.4l-5.4-5.4l-2-3.4V4h-2z"></svg:path>`,
})
export class MdiFlaskEmptyOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
