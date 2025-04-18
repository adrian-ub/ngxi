import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignBoldIcon],svg[ph-traffic-sign-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 113.46L142.54 10a20.57 20.57 0 0 0-29.08 0L10 113.46a20.57 20.57 0 0 0 0 29.08L113.46 246a20.57 20.57 0 0 0 29.08 0L246 142.54a20.57 20.57 0 0 0 0-29.08M128 226.57L29.43 128L128 29.43L226.57 128Zm7.51-122.08a12 12 0 0 1 17-17l24 24a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17-17L139 132h-27a12 12 0 0 0-12 12v4a12 12 0 0 1-24 0v-4a36 36 0 0 1 36-36h27Z"></svg:path>`,
})
export class PhTrafficSignBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
