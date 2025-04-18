import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesWearablesIcon],svg[material-symbols-light-devices-wearables-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.923 18q1.508 0 2.562-1.054t1.053-2.562t-1.054-2.561q-1.053-1.054-2.561-1.054q-1.507 0-2.561 1.054t-1.054 2.562t1.053 2.561Q15.417 18 16.924 18M5.039 21q-.667 0-1.142-.475t-.474-1.14V4.615q0-.666.475-1.14T5.038 3h6.77q.666 0 1.14.475t.475 1.14v3.697q-.287.165-.527.341t-.473.382V6.5h-8v11h6.252q.367.852 1.006 1.53t1.41 1.2q-.22.366-.59.568t-.79.202zm9.884 0v-2.446q-1.207-.585-1.911-1.705t-.704-2.464t.704-2.465t1.911-1.705V7.77h4v2.446q1.208.585 1.912 1.705t.704 2.464t-.704 2.465t-1.912 1.705V21z"></svg:path>`,
})
export class MaterialSymbolsLightDevicesWearablesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
