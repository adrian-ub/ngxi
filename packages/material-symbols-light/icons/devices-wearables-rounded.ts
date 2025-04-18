import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDevicesWearablesRoundedIcon],svg[material-symbols-light-devices-wearables-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.923 18q1.508 0 2.562-1.054t1.053-2.562t-1.054-2.561q-1.053-1.054-2.561-1.054q-1.507 0-2.561 1.054t-1.054 2.562t1.053 2.561Q15.417 18 16.924 18M5.039 21q-.667 0-1.142-.475t-.474-1.14V4.615q0-.666.475-1.14T5.038 3h6.77q.666 0 1.14.475t.475 1.14v3.568q0 .204-.144.342t-.357.138t-.356-.143t-.143-.357V6.5h-8v11H9.9q.36 0 .648.195t.489.505q.278.462.646.852q.367.39.792.717q.137.104.215.258q.077.153.077.318q0 .34-.312.497q-.312.158-.686.158zm9.884-.808v-1.638q-1.207-.585-1.911-1.705t-.704-2.464t.704-2.465t1.911-1.705V8.577q0-.343.23-.576t.57-.232h2.4q.34 0 .57.232t.23.576v1.638q1.208.585 1.912 1.705q.703 1.12.703 2.464q0 1.345-.704 2.465q-.703 1.12-1.911 1.705v1.638q0 .344-.23.576t-.57.232h-2.4q-.34 0-.57-.232t-.23-.576"></svg:path>`,
})
export class MaterialSymbolsLightDevicesWearablesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
