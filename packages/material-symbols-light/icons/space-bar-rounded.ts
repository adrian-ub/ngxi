import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpaceBarRoundedIcon],svg[material-symbols-light-space-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.616 14q-.667 0-1.141-.475T5 12.385V9.5q0-.213.144-.356T5.501 9t.356.144T6 9.5v2.885q0 .269.173.442t.443.173h10.769q.269 0 .442-.173t.173-.442V9.5q0-.213.144-.356T18.501 9t.356.144T19 9.5v2.885q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightSpaceBarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
