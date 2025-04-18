import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSelectGroupIcon],svg[mdi-select-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a2 2 0 0 0-2 2h2m2-2v2h2V3m2 0v2h2V3m2 0v2h2V3m2 0v2h2a2 2 0 0 0-2-2M3 7v2h2V7m2 0v4h4V7m2 0v4h4V7m2 0v2h2V7M3 11v2h2v-2m14 0v2h2v-2M7 13v4h4v-4m2 0v4h4v-4M3 15v2h2v-2m14 0v2h2v-2M3 19a2 2 0 0 0 2 2v-2m2 0v2h2v-2m2 0v2h2v-2m2 0v2h2v-2m2 0v2a2 2 0 0 0 2-2Z"></svg:path>`,
})
export class MdiSelectGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
