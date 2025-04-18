import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFactoryOutlineIcon],svg[material-symbols-light-factory-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V10.648l5-2.129v1.962l5-2V11h8v10zm1-1h16v-8h-8V9.95l-5 2V10l-3 1.325zm7.23-2.461h1.54V14.46h-1.54zm-4 0h1.54V14.46H7.23zm8 0h1.54V14.46h-1.54zM21 11h-3.116l1-7.23h1.231zM4 20h16z"></svg:path>`,
})
export class MaterialSymbolsLightFactoryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
