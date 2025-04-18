import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsGridIcon],svg[flat-color-icons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M7 7v34h34V7zm32 8h-6V9h6zm-14 0V9h6v6zm6 2v6h-6v-6zm-8-2h-6V9h6zm0 2v6h-6v-6zm-8 6H9v-6h6zm0 2v6H9v-6zm2 0h6v6h-6zm6 8v6h-6v-6zm2 0h6v6h-6zm0-2v-6h6v6zm8-6h6v6h-6zm0-2v-6h6v6zM15 9v6H9V9zM9 33h6v6H9zm24 6v-6h6v6z"></svg:path>`,
})
export class FlatColorIconsGridIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
