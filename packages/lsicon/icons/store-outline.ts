import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconStoreOutlineIcon],svg[lsicon-store-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5.5 8V6M8 8V6m2.5 2V6m-7 8V9M6 8.5v5h6.5v-5M4 2.5h8l1.5 3v3h-11v-3z"></svg:path>`,
})
export class LsiconStoreOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
