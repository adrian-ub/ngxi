import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilEnvelopeClosedIcon],svg[cil-envelope-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 112v384h480V112Zm220.8 229.6a32.17 32.17 0 0 0 38.4 0l23.467-17.6L464 448v16H48v-16l165.333-124ZM256 316L48 160v-16h416v16ZM48 200l138.667 104L48 408Zm416 208L325.333 304L464 200Z"></svg:path>`,
})
export class CilEnvelopeClosedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
