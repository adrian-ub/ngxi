import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagUm1x1Icon],svg[flag-um-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#bd3d44" d="M0 0h512v512H0"></svg:path><svg:path stroke="#fff" stroke-width="40" d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512"></svg:path><svg:path fill="#192f5d" d="M0 0h390v275H0z"></svg:path><svg:marker id="flagUm1x10" markerHeight="30" markerWidth="30"><svg:path fill="#fff" d="m15 0l9.3 28.6L0 11h30L5.7 28.6"></svg:path></svg:marker><svg:path fill="none" marker-mid="url(#flagUm1x10)" d="m0 0l18 11h65h65h65h65h66L51 39h65h65h65h65L18 66h65h65h65h65h66L51 94h65h65h65h65L18 121h65h65h65h65h66L51 149h65h65h65h65L18 177h65h65h65h65h66L51 205h65h65h65h65L18 232h65h65h65h65h66z"></svg:path>`,
})
export class FlagUm1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
