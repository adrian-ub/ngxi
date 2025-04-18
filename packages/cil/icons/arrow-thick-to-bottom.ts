import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilArrowThickToBottomIcon],svg[cil-arrow-thick-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 176.005V16H176v160H56v38.623l199.8 200L456 214.637v-38.632Zm-80.174 193.371L94.616 208.005H208V48h96v160h113.361ZM56 464h400v32H56z"></svg:path>`,
})
export class CilArrowThickToBottomIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
