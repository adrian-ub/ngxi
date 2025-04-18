import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMilkIcon],svg[whh-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.857 1024h-960q-13 0-22.5-9.5T.857 992V416q0-78 8-86l120-120V32q0-13 9.5-22.5t22.5-9.5h640q13 0 22.5 9.5t9.5 22.5v160l160 128q15 15 22.5 33.5t8.5 29.5t1 33v576q0 13-9.5 22.5t-22.5 9.5m-928-64h512V448h-512zm0-576h512l128-128h-512zm704-320h-576v128h576zm32 192l-128 128h288zm160 192h-320v512h320z"></svg:path>`,
})
export class WhhMilkIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
