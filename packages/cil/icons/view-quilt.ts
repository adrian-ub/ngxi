import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilViewQuiltIcon],svg[cil-view-quilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v384h480V64Zm448 176H192V96h272Zm-272 32h120v144H192ZM48 96h112v320H48Zm296 320V272h120v144Z"></svg:path>`,
})
export class CilViewQuiltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
