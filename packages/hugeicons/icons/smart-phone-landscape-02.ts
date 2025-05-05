import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmartPhoneLandscape02Icon],svg[hugeicons-smart-phone-landscape-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 10.5v3c0 2.357 0 3.535.732 4.268c.733.732 1.911.732 4.268.732h10c2.357 0 3.536 0 4.268-.732C22 17.035 22 15.857 22 13.5v-3c0-2.357 0-3.536-.732-4.268S19.358 5.5 17 5.5H7c-2.357 0-3.535 0-4.268.732S2 8.143 2 10.5"></svg:path><svg:path d="M2 9.5v4l1-.5v-3z"></svg:path></svg:g>`,
})
export class HugeiconsSmartPhoneLandscape02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
