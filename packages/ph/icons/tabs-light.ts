import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTabsLightIcon],svg[ph-tabs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M253.75 166.28L231.46 92a13.91 13.91 0 0 0-13.41-10H208a6 6 0 0 0 0 12h10.05a2 2 0 0 1 1.95 1.42L240 162h-35.54l-21-70a13.91 13.91 0 0 0-13.41-10H160a6 6 0 0 0 0 12h10.05a2 2 0 0 1 1.95 1.42L192 162h-35.54l-21-70a13.91 13.91 0 0 0-13.41-10H38a13.91 13.91 0 0 0-13.46 10L2.28 166.2v.2a3 3 0 0 0-.1.39a.1.1 0 0 0 0 .05A6 6 0 0 0 8 174h240a6 6 0 0 0 5.75-7.72M36 95.42A2 2 0 0 1 38 94h84.1a2 2 0 0 1 1.9 1.43L144 162H16.06Z"></svg:path>`,
})
export class PhTabsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
