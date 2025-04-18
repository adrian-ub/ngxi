import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGarageDoorOutlineIcon],svg[material-symbols-light-garage-door-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.692 20V9.946L2.604 12.25L2 11.458L12 4l10.02 7.458l-.604.792l-3.089-2.304V20h-1v-9.884H6.692V20zm2.693-1v-1h7.23v1zm0-2.961v-1h7.23v1zm0-2.962v-1h7.23v1zM6.81 9.115h10.4L12 5.255z"></svg:path>`,
})
export class MaterialSymbolsLightGarageDoorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
