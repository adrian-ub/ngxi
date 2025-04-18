import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTextSizeIcon],svg[cil-text-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 184h32v-48h96v232h-40v32h144v-32h-40V136h96v48h32v-80H176z"></svg:path><svg:path fill="currentColor" d="M16 280h32v-32h56v152H72v32h112v-32h-32V248h64v32h32v-64H16z"></svg:path>`,
})
export class CilTextSizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
