import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVaultBoldIcon],svg[ph-vault-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h12v12a12 12 0 0 0 24 0v-12h104v12a12 12 0 0 0 24 0v-12h12a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 188V60h168v52h-21.68a44 44 0 1 0 0 24H212v52Zm124-64a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhVaultBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
