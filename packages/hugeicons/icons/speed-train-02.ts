import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSpeedTrain02Icon],svg[hugeicons-speed-train-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 3h4.733c2.61 0 3.916 0 5.135.401s2.269 1.177 4.37 2.728l3.69 2.726l.08.06A5 5 0 0 1 22 12.958v.073A2 2 0 0 1 20.032 15H2"></svg:path><svg:path d="M2 11h4.095c2.594 0 3.89 0 5.09.451c1.2.45 2.213 1.319 4.239 3.055L16 15m-6-8h7M2 19h20m-4 0v2m-6-2v2m-6-2v2"></svg:path></svg:g>`,
})
export class HugeiconsSpeedTrain02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
