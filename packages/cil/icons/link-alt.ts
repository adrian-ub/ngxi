import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLinkAltIcon],svg[cil-link-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 256a80.09 80.09 0 0 1 80-80h112v-32H128a112 112 0 0 0 0 224h112v-32H128a80.09 80.09 0 0 1-80-80m336-112H272v32h112a80 80 0 0 1 0 160H272v32h112a112 112 0 0 0 0-224"></svg:path><svg:path fill="currentColor" d="M140 240.652h232v32H140z"></svg:path>`,
})
export class CilLinkAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
