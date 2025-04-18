import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditAttributesRoundedIcon],svg[material-symbols-edit-attributes-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17q-2.075 0-3.537-1.463T2 12t1.463-3.537T7 7h10q2.075 0 3.538 1.463T22 12t-1.463 3.538T17 17zm1.75-3.4l2.325-2.325q.225-.225.225-.525t-.225-.525T10.55 10t-.525.225L8.05 12.2l-.475-.475Q7.35 11.5 7.05 11.5t-.525.225t-.225.525t.225.525l.825.825q.3.3.7.3t.7-.3"></svg:path>`,
})
export class MaterialSymbolsEditAttributesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
