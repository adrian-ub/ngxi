import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDoorIcon],svg[cil-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 464V64H112v400H16v32h480v-32Zm-32 0H144V96h224Z"></svg:path><svg:path fill="currentColor" d="M312 252h32v72h-32z"></svg:path>`,
})
export class CilDoorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
