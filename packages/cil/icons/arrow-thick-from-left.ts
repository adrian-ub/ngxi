import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickFromLeftIcon],svg[cil-arrow-thick-from-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296.007 56h-38.632v120h-144v160h144v120H296l200-199.8Zm-6.632 361.384V304h-144v-96h144V94.639l161.37 161.535ZM17.375 56h32v400h-32z"></svg:path>`,
})
export class CilArrowThickFromLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
