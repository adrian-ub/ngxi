import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSchoolOutlineIcon],svg[material-symbols-light-school-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.692l-6-3.261v-4.846L3.077 9L12 4.154L20.923 9v6.385h-1V9.562L18 10.585v4.846zm0-5.992L18.83 9L12 5.3L5.17 9zm0 4.852l5-2.7v-3.717l-5 2.708l-5-2.708v3.717zm0-3.487"></svg:path>`,
})
export class MaterialSymbolsLightSchoolOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
