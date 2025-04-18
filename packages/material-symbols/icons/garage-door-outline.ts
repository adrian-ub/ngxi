import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGarageDoorOutlineIcon],svg[material-symbols-garage-door-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V10.85L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.6l-2.8-2.15V21h-2V11H7v10zm3-1v-2h8v2zm0-3v-2h8v2zm0-3v-2h8v2zm-.575-5h9.15L12 5.525z"></svg:path>`,
})
export class MaterialSymbolsGarageDoorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
