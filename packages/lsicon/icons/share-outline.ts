import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShareOutlineIcon],svg[lsicon-share-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.136 6.5H3.5v7h9v-7h-1.636M8 3v5.5m1.82-3.825L7.945 2.8L6.07 4.675"></svg:path>`,
})
export class LsiconShareOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
