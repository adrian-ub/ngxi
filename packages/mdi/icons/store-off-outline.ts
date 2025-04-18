import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStoreOffOutlineIcon],svg[mdi-store-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l4 4H4l-1 5v2h1v6h10v-4.11l6.84 6.84l1.27-1.27zM5.64 9h1.47l3 3H5.04zM12 18H6v-4h6zm6-3.2V14h-.8l-2-2h3.76l-.6-3H12.2l-2-2H20l1 5v2h-1v2.8zM9.2 6l-2-2H20v2z"></svg:path>`,
})
export class MdiStoreOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
