import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDisableHeartIcon],svg[streamline-disable-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.5 10.903l-.571.53a1 1 0 0 1-1.36.001L2.404 7.575c-.977-.954-1.095-2.23-.676-3.28M2.85 2.862c1.121-.78 2.785-.765 4.4 1.063c3.649-4.134 7.557 1.002 4.844 3.65L9.749 9.742M.5.5l13 13"></svg:path>`,
})
export class StreamlineDisableHeartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
