import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRampRightIcon],svg[material-symbols-light-ramp-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 19.98v-7.107q-.69 1.433-1.975 2.763T6.527 18.09l-.72-.72q.809-.502 1.795-1.3q.987-.798 1.857-1.845t1.456-2.366T11.5 9V5.94L9.4 8.036l-.708-.708L12 4.019l3.308 3.308l-.708.708l-2.1-2.094v14.04z"></svg:path>`,
})
export class MaterialSymbolsLightRampRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
