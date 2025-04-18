import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsNervous24pxIcon],svg[healthicons-nervous-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.427 15.246a2.5 2.5 0 0 1 2.498-2.498h4.135a2.498 2.498 0 0 1 0 4.995H9.926a2.5 2.5 0 0 1-2.498-2.497M9 14.285a.5.5 0 0 1 .5-.5h5a.5.5 0 1 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 1.422a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z" clip-rule="evenodd"></svg:path><svg:path d="M10.25 9.75a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsNervous24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
