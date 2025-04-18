import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPackagesIcon],svg[eos-icons-packages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.04 6.01h-16v2h16zm-2.02-4H6.01v2h12.01zM2 10v2h2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8h2v-2Zm9 9H6v-2h5Z"></svg:path>`,
})
export class EosIconsPackagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
