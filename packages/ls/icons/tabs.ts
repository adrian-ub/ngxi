import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsTabsIcon],svg[ls-tabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430 96H108c-19 0-36 17-36 36v286c0 19 17 36 36 36h35v72h-35C49 526 0 477 0 418V132C0 73 49 24 108 24h322c59 0 108 49 108 108h-72c0-19-17-36-36-36m-143 72h322c59 0 108 48 108 107v287c0 59-49 107-108 107H287c-59 0-108-48-108-107V275c0-59 49-107 108-107m0 430h322c19 0 36-17 36-36V275c0-19-17-36-36-36H287c-19 0-36 17-36 36v287c0 19 17 36 36 36"></svg:path>`,
})
export class LsTabsIcon {
  readonly viewBox = input("0 0 717 669")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
