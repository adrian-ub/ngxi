import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPolymerIcon],svg[file-icons-polymer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M411.826 77.913h-89.043L147.144 359.068L89.044 256L189.216 77.913h-89.043L0 256l100.174 178.087h89.043l175.639-281.155L422.956 256L322.784 434.087h89.043L512 256z"></svg:path>`,
})
export class FileIconsPolymerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
