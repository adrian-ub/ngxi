import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTipJarLightIcon],svg[ph-tip-jar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M182 50.48V32a14 14 0 0 0-14-14H88a14 14 0 0 0-14 14v18.48A38.05 38.05 0 0 0 42 88v112a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38V88a38.05 38.05 0 0 0-32-37.52M170 32v18h-20V30h18a2 2 0 0 1 2 2m-52 18V30h20v20ZM88 30h18v20H86V32a2 2 0 0 1 2-2m114 170a26 26 0 0 1-26 26H80a26 26 0 0 1-26-26V88a26 26 0 0 1 26-26h96a26 26 0 0 1 26 26Zm-44-40a22 22 0 0 1-22 22h-2v10a6 6 0 0 1-12 0v-10h-10a6 6 0 0 1 0-12h24a10 10 0 0 0 0-20h-16a22 22 0 0 1 0-44h2V96a6 6 0 0 1 12 0v10h10a6 6 0 0 1 0 12h-24a10 10 0 0 0 0 20h16a22 22 0 0 1 22 22"></svg:path>`,
})
export class PhTipJarLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
