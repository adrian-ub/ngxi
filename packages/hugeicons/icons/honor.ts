import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHonorIcon],svg[hugeicons-honor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 3.001h19m-17 0V14c0 2.329.43 3.09 2.428 4.288l3.014 1.808c1.003.602 1.504.903 2.058.903s1.055-.301 2.058-.903l3.015-1.808C19.069 17.089 19.5 16.328 19.5 14V3.001m-5 10h-5m5-5h-5" color="currentColor"></svg:path>`,
})
export class HugeiconsHonorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
