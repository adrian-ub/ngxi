import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVolcanoIcon],svg[material-symbols-light-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.539 21l3.115-7h3.019l2-5h5.577l3.423 12zM13.885 5.27v-3h1v3zm4.024 1.663l-.688-.689l2.114-2.113l.713.688zm-7.05 0L8.747 4.819l.688-.713l2.114 2.138z"></svg:path>`,
})
export class MaterialSymbolsLightVolcanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
