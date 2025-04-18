import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phVaultLightIcon],svg[ph-vault-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v136a14 14 0 0 0 14 14h18v18a6 6 0 0 0 12 0v-18h116v18a6 6 0 0 0 12 0v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m0 152H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2v66h-20.4a46 46 0 1 0 0 12H218v58a2 2 0 0 1-2 2m-51.37-72a14 14 0 1 0 0 12h20.83a34 34 0 1 1 0-12Z"></svg:path>`,
})
export class PhVaultLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
