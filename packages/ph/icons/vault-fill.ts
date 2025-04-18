import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVaultFillIcon],svg[ph-vault-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h16v16a8 8 0 0 0 16 0v-16h112v16a8 8 0 0 0 16 0v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-8 96h-28.91a36 36 0 1 1 0-16H208a8 8 0 0 1 0 16m-44-8a20 20 0 1 1-20-20a20 20 0 0 1 20 20"></svg:path>`,
})
export class PhVaultFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
