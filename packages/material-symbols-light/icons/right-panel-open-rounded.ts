import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRightPanelOpenRoundedIcon],svg[material-symbols-light-right-panel-open-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.596 14.204V9.799q0-.276-.252-.382t-.449.092L8.964 11.44q-.237.236-.237.559t.242.566l1.927 1.926q.196.197.448.096t.252-.384M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h12.77q.666 0 1.14.475T20 5.615v12.77q0 .666-.475 1.14t-1.14.475zM15 19V5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192z"></svg:path>`,
})
export class MaterialSymbolsLightRightPanelOpenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
