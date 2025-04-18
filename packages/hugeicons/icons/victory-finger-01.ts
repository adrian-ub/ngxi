import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVictoryFinger01Icon],svg[hugeicons-victory-finger-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.518 13l-.553-2.957m0 0L6.85 4.076a1.752 1.752 0 0 1 3.44-.667l1.213 6.072l1.22-6.073a1.75 1.75 0 0 1 2.065-1.375c.938.19 1.483 1.105 1.306 2.048L15.068 9.83m-7.103.213c-1.893 1.775-3.053 2.817-3.291 3.753c-.265 1.044-.484 2.19 1.404 4.486c.622.756 1.146 1.28 1.267 1.48c.212.349.659.61.659 2.24m7.08-12.153c2.262.642 3.733 1.861 4.154 2.73c.47.97.337 2.427-.648 4.827c-.388.947-.864 1.486-.943 1.706c-.183.514-.462 1.067-.333 2.866" color="currentColor"></svg:path>`,
})
export class HugeiconsVictoryFinger01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
