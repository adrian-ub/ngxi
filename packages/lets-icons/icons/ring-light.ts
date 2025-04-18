import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsRingLightIcon],svg[lets-icons-ring-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M7.342 12.946a4.722 4.722 0 0 1 9.315 0l.104.617c.155.935.6 1.797 1.269 2.467a.568.568 0 0 1-.402.97H6.372a.568.568 0 0 1-.402-.97a4.55 4.55 0 0 0 1.27-2.467z"></svg:path><svg:path stroke-linecap="round" d="m11 9l1-6m1 6l-1-6m-1.932 17.63c.114.106.365.2.715.267c.349.067.777.103 1.217.103s.868-.036 1.217-.103s.6-.161.715-.268"></svg:path></svg:g>`,
})
export class LetsIconsRingLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
