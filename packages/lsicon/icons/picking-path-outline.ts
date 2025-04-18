import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPickingPathOutlineIcon],svg[lsicon-picking-path-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 5.5v6a2 2 0 1 0 4 0v-7a2 2 0 1 1 4 0v3m-8-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm8 7.7l.148-.104A3.17 3.17 0 0 0 13.5 10.5a1.5 1.5 0 0 0-3 0a3.17 3.17 0 0 0 1.352 2.596z"></svg:path>`,
})
export class LsiconPickingPathOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
