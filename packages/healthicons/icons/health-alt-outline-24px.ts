import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthAltOutline24pxIcon],svg[healthicons-health-alt-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 17v-4H7v-2h4V7h2v4h4v2h-4v4z"></svg:path><svg:path fill-rule="evenodd" d="M5 2.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2zm0 2h14v15H5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsHealthAltOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
