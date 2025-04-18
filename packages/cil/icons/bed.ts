import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBedIcon],svg[cil-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 224H208v120.619h-22.154v-41A87.716 87.716 0 0 0 98.229 216H48v-64H16v344h32v-47.743l416 3.328V496h32V304a80.09 80.09 0 0 0-80-80M48 248h50.229a55.68 55.68 0 0 1 55.617 55.617v41H48Zm416 171.584l-416-3.328v-39.637h416Zm0-74.965H240V256h176a48.055 48.055 0 0 1 48 48Z"></svg:path>`,
})
export class CilBedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
