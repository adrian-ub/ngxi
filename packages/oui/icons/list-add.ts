import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiListAddIcon],svg[oui-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11H9v1h2v2h1v-2h2v-1h-2V9h-1zM7.758 9a4.5 4.5 0 1 1-.502 4H6v-1h1.027a4.55 4.55 0 0 1 .23-2H6V9zM2 4V3h2v1zm4 0V3h8v1zm0 3V6h8v1zM2 7V6h2v1zm0 3V9h2v1zm0 3v-1h2v1z"></svg:path>`,
})
export class OuiListAddIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
