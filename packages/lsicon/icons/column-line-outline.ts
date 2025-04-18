import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconColumnLineOutlineIcon],svg[lsicon-column-line-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 2v11.5H14M4 6l3.5-1.5l2 2l4-4m-9 11v-6h3v6zm5 0v-4h3v4z"></svg:path>`,
})
export class LsiconColumnLineOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
