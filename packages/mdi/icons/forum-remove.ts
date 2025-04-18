import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiForumRemoveIcon],svg[mdi-forum-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-2v6.1c1.2.2 2.2.7 3 1.4V7c0-.5-.5-1-1-1M6 17c0 .5.5 1 1 1h5c0-1.1.3-2.1.8-3H6zM16 2H3c-.5 0-1 .5-1 1v14l4-4h8.7c.7-.5 1.5-.8 2.3-.9V3c0-.5-.5-1-1-1m4.12 12.46l1.42 1.42L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.41-1.42L16.59 18l-2.12-2.12l1.41-1.41L18 16.59z"></svg:path>`,
})
export class MdiForumRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
