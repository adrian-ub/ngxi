import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlasWaterIcon],svg[majesticons-glas-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M15.234 20H8.766a2 2 0 0 1-1.985-1.752L6 12l2.072-.69a2 2 0 0 1 1.742.233l1.077.717a2 2 0 0 0 2.218 0l1.077-.717a2 2 0 0 1 1.742-.234L18 12l-.781 6.248A2 2 0 0 1 15.234 20"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 4h15M6 12l.781 6.248A2 2 0 0 0 8.766 20h6.468a2 2 0 0 0 1.985-1.752L18 12M6 12l2.072-.69a2 2 0 0 1 1.742.233l1.077.717a2 2 0 0 0 2.218 0l1.077-.717a2 2 0 0 1 1.742-.234L18 12M6 12l-.938-7.5M18 12l.938-7.5"></svg:path></svg:g>`,
})
export class MajesticonsGlasWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
