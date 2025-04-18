import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconWindowIcon],svg[codicon-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2h-13l-.5.5v11l.5.5h13l.5-.5v-11zM14 13H2V6h12zm0-8H2V3h12z"></svg:path>`,
})
export class CodiconWindowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
