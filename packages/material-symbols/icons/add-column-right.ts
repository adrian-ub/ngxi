import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAddColumnRightIcon],svg[material-symbols-add-column-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V3h8v18zm10 0V3h8v4.1q-.25-.05-.488-.075T19 7q-2.075 0-3.537 1.45T14 12t1.463 3.55T19 17q.275 0 .513-.025T20 16.9V21zm6-6v-2h-2v-2h2V9h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsAddColumnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
