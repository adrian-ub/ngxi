import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiForumMinusOutlineIcon],svg[mdi-forum-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2v6.1c1.2.2 2.2.7 3 1.4V7c0-.5-.5-1-1-1M6 17c0 .5.5 1 1 1h5c0-1.1.3-2.1.8-3H6zM16 2H3c-.5 0-1 .5-1 1v14l4-4h8.7c.7-.5 1.5-.8 2.3-.9V3c0-.5-.5-1-1-1m-1 9H5.2L4 12.2V4h11zm7 6v2h-8v-2z"></svg:path>`,
})
export class MdiForumMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
