import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightningStandOutlineIcon],svg[material-symbols-lightning-stand-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-3.025 0-5.012-.812T5 18.5t1.988-2.687T12 15t5.013.813T19 18.5t-1.987 2.688T12 22m0-2q-2.525 0-4.05-.525T6.1 18q-.05.125-.075.25T6 18.5q0 1.125 1.637 1.813T12 21t4.363-.687T18 18.5q0-.125-.025-.25T17.9 18q-.325.95-1.85 1.475T12 20m0-1q2.2 0 3.6-.425T17 17.5t-1.4-1.075T12 16t-3.6.425T7 17.5t1.4 1.075T12 19m-1-5V9H9l4-7v5h2zm1 6"></svg:path>`,
})
export class MaterialSymbolsLightningStandOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
