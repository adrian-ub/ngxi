import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWalkIcon],svg[cil-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="309.912" cy="82.088" r="34.088" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m322 143.462l-60.585-20.64l-77.615 28.226A24.07 24.07 0 0 0 168 173.6V232h32v-52.793l48.811-17.749L158.622 440h33.613l50.082-155.811l7.871 2.568L288 356.079V440h32v-85.96a24.1 24.1 0 0 0-2.931-11.493l-37.56-68.861l28.949-88.715l19.27 34.684A24.01 24.01 0 0 0 348.707 232H400v-32h-46.586Z"></svg:path>`,
})
export class CilWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
