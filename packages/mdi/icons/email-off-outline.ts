import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmailOffOutlineIcon],svg[mdi-email-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l1.5 1.5c-.3.4-.6.9-.6 1.5v12c0 1.1.9 2 2 2h14.1l2.7 2.7zM4 18V8l5.6 3.5l6.5 6.5zM9.2 6l-2-2H20c1.1 0 2 .9 2 2v12c0 .2 0 .5-.1.7L20 16.8V8l-5.4 3.4l-1.2-1.2L20 6z"></svg:path>`,
})
export class MdiEmailOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
