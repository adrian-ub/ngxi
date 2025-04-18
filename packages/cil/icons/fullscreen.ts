import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFullscreenIcon],svg[cil-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 48V16H16v192h32V70.627l160.687 160.686l22.626-22.626L70.627 48zm256 256v137.373L299.313 276.687l-22.626 22.626L441.373 464H304v32h192V304z"></svg:path>`,
})
export class CilFullscreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
