import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiListIcon],svg[oui-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4V3h2v1zm4 0V3h8v1zm0 3V6h8v1zm0 3V9h8v1zM2 7V6h2v1zm0 3V9h2v1zm4 3v-1h8v1zm-4 0v-1h2v1z"></svg:path>`,
})
export class OuiListIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
