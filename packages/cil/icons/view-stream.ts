import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilViewStreamIcon],svg[cil-view-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64v384h480V64Zm448 32v144H48V96ZM48 416V272h416v144Z"></svg:path>`,
})
export class CilViewStreamIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
