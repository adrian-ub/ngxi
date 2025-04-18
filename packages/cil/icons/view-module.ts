import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilViewModuleIcon],svg[cil-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v384h480V64Zm448 176H352V96h112Zm-272 0V96h128v144Zm128 32v144H192V272ZM160 96v144H48V96ZM48 272h112v144H48Zm304 144V272h112v144Z"></svg:path>`,
})
export class CilViewModuleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
