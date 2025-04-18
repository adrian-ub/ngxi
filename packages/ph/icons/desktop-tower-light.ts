import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDesktopTowerLightIcon],svg[ph-desktop-tower-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 72a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6m-6 26h-32a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m38-50v160a14 14 0 0 1-14 14h-80a14 14 0 0 1-14-14v-18H94v20h18a6 6 0 0 1 0 12H64a6 6 0 0 1 0-12h18v-20H32a22 22 0 0 1-22-22V96a22 22 0 0 1 22-22h106V48a14 14 0 0 1 14-14h80a14 14 0 0 1 14 14M138 178V86H32a10 10 0 0 0-10 10v72a10 10 0 0 0 10 10Zm96-130a2 2 0 0 0-2-2h-80a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h80a2 2 0 0 0 2-2Zm-42 122a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDesktopTowerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
