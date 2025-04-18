import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLaptopChromebookOutlineIcon],svg[material-symbols-light-laptop-chromebook-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 18.308v-1h2V4.538h18v12.77h2v1zm9-1h4v-.77h-4zm-6-1.77h16v-10H4zm8-5"></svg:path>`,
})
export class MaterialSymbolsLightLaptopChromebookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
