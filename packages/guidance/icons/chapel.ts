import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceChapelIcon],svg[guidance-chapel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M2.5 22v-7.5l3-3v-6l.272-.102A12 12 0 0 0 11.652.65L11.75.5h.5l.097.151a12 12 0 0 0 5.88 4.747l.273.102v6l3 3V22M9 8.5h6m-3-3v8m4.5 8.5v-6h-9v6m4.5-6v6m12 1.5H0"></svg:path>`,
})
export class GuidanceChapelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
