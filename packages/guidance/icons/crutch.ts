import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceCrutchIcon],svg[guidance-crutch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 13.5h6m-4.5 0v4c.96.96 1.5 2.263 1.5 3.621m0 0V23.5m0-2.379c0-1.358.54-2.66 1.5-3.621v-4m-3 10h3m4.5.5v-6.5a2 2 0 0 1 2-2v-8s-1.5-1-4-1s-4 1-4 1V12m3.85-7.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></svg:path>`,
})
export class GuidanceCrutchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
