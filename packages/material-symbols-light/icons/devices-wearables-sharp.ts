import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesWearablesSharpIcon],svg[material-symbols-light-devices-wearables-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.923 18q1.508 0 2.562-1.054t1.053-2.562t-1.054-2.561q-1.053-1.054-2.561-1.054q-1.507 0-2.561 1.054t-1.054 2.562t1.053 2.561Q15.417 18 16.924 18m-13.5 3V3h10v5.312q-.287.165-.527.341t-.473.382V6.5h-8v11h6.252q.367.852 1.006 1.53t1.41 1.2V21zm11.5 0v-2.446q-1.208-.585-1.912-1.705q-.703-1.12-.703-2.464q0-1.345.703-2.465q.704-1.12 1.912-1.705V7.77h4v2.446q1.208.585 1.912 1.705q.703 1.12.703 2.464q0 1.345-.704 2.465q-.703 1.12-1.911 1.705V21z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesWearablesSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
