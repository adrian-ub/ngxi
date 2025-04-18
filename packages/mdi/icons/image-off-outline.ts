import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageOffOutlineIcon],svg[mdi-image-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20.7L3.3 2L2 3.3l1 1V19c0 1.1.9 2 2 2h14.7l1 1zM5 19V6.3l7.6 7.6l-1.5 1.9L9 13.1L6 17h9.7l2 2zM8.8 5l-2-2H19c1.1 0 2 .9 2 2v12.2l-2-2V5z"></svg:path>`,
})
export class MdiImageOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
