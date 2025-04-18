import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsCleanupIcon],svg[eos-icons-cleanup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.016h-5v-.013a1.984 1.984 0 0 0-1.978-1.978h-.035l3.857-10.393l-1.732-.643l-4.095 11.036h-.039A1.984 1.984 0 0 0 9 15.003v.013H4v2h16Zm0 3.002H4L2 22h20z"></svg:path>`,
})
export class EosIconsCleanupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
