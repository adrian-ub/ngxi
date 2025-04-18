import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWalletDone02Icon],svg[hugeicons-wallet-done-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 15.061V6c2.105.621 6.576 1.427 12.004 1.803c2.921.202 4.382.303 5.189 1.174c.807.87.807 2.273.807 5.078v2.013c0 2.889 0 4.333-.984 5.232c-.983.899-2.324.768-5.005.506A59 59 0 0 1 11 21.277"></svg:path><svg:path d="M17.626 8c.377-1.423.72-4.012-.299-5.297c-.645-.815-1.605-.736-2.545-.654c-4.944.435-8.437 1.318-10.389 1.918C3.553 4.225 3 5.045 3 5.96M15 15a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0M3 19s1 0 2 2c0 0 3.176-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsWalletDone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
