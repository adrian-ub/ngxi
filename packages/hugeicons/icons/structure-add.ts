import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStructureAddIcon],svg[hugeicons-structure-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.002 5c0-1.414 0-2.121.512-2.56C16.027 2 16.852 2 18.501 2s2.474 0 2.986.44C22 2.878 22 3.585 22 5s0 2.121-.513 2.56C20.975 8 20.15 8 18.501 8s-2.474 0-2.987-.44c-.512-.439-.512-1.146-.512-2.56m0 14c0-1.414 0-2.121.512-2.56c.513-.44 1.338-.44 2.987-.44s2.474 0 2.986.44C22 16.878 22 17.585 22 19s0 2.121-.513 2.56c-.512.44-1.337.44-2.986.44s-2.474 0-2.987-.44c-.512-.439-.512-1.146-.512-2.56m-7.979-9v4m1.99-2H4.99m2.039 5.036a5.03 5.03 0 0 0 5.028-5.03a5.03 5.03 0 0 0-5.028-5.03m0 10.06A5.03 5.03 0 0 1 2 12.006a5.03 5.03 0 0 1 5.029-5.03m0 10.06c-.07 2.13 1.534 2.916 2.647 2.956h2.327M7.029 6.976c-.071-2.16 1.519-2.92 2.647-2.967h2.327" color="currentColor"></svg:path>`,
})
export class HugeiconsStructureAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
