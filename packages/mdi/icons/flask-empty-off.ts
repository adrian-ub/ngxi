import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskEmptyOffIcon],svg[mdi-flask-empty-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.8 22.7l-1.2-1.2c-.5.3-1 .5-1.6.5H6c-1.7 0-3-1.3-3-3c0-.6.2-1.2.5-1.6l4.4-7.6L1.1 3l1.3-1.3l19.7 19.7zM15 7.8V6c.6 0 1-.4 1-1V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v.8l12.4 12.4z"></svg:path>`,
})
export class MdiFlaskEmptyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
