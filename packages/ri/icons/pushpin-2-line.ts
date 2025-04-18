import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPushpin2LineIcon],svg[ri-pushpin-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3v2h-1v6l2 3v2h-6v7h-2v-7H5v-2l2-3V5H6V3zM9 5v6.606L7.404 14h9.192L15 11.606V5z"></svg:path>`,
})
export class RiPushpin2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
