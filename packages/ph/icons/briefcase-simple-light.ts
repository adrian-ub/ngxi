import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBriefcaseSimpleLightIcon],svg[ph-briefcase-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M216.008 66H174V56a22.025 22.025 0 0 0-22-22h-48a22.025 22.025 0 0 0-22 22v10H40.008a14.016 14.016 0 0 0-14 14v128a14.016 14.016 0 0 0 14 14h176a14.016 14.016 0 0 0 14-14V80a14.016 14.016 0 0 0-14-14zM94 56a10.011 10.011 0 0 1 10-10h48a10.011 10.011 0 0 1 10 10v10H94zm124.008 152a2.003 2.003 0 0 1-2 2h-176a2.003 2.003 0 0 1-2-2V80a2.003 2.003 0 0 1 2-2h176a2.003 2.003 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class PhBriefcaseSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
