import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightServiceToolboxOutlineIcon],svg[material-symbols-light-service-toolbox-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.192 7V5.846q0-.412.294-.706t.706-.294h5.616q.412 0 .706.294t.294.706V7H17.7q.292 0 .53.155t.347.43l2.234 5.054q.095.219.142.467t.047.442V18q0 .413-.294.706T20 19H4q-.413 0-.706-.294T3 18v-4.446q0-.258.047-.477q.047-.22.142-.438l2.234-5.054q.11-.275.347-.43T6.3 7zm1 0h5.616V5.846H9.192zM7.5 12.692v-1h1v1h7v-1h1v1h3.246L17.7 8H6.3l-2.046 4.692zm0 1H4V18h16v-4.308h-3.5v1h-1v-1h-7v1h-1zm4.5 0"></svg:path>`,
})
export class MaterialSymbolsLightServiceToolboxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
