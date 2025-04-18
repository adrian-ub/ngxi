import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTumerLightIcon],svg[lets-icons-tumer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="14" r="8"></svg:circle><svg:path stroke-linecap="round" d="M12 14v-3m5.5-3.5L19 6m-8.932-3.63c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 2c.44 0 .868.036 1.217.103s.6.161.715.268"></svg:path></svg:g>`,
})
export class LetsIconsTumerLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
