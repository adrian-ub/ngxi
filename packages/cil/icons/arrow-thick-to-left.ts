import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickToLeftIcon],svg[cil-arrow-thick-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 176V56h-38.627l-200 199.8L297.363 456H336V336h160V176Zm128 128H304v113.361L142.625 255.826L304 94.616V208h160ZM16 56h32v400H16z"></svg:path>`,
})
export class CilArrowThickToLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
