import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsAdjustmentsVertical16SolidIcon],svg[heroicons-adjustments-vertical-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 13.25V7.5h1.5v5.75a.75.75 0 0 1-1.5 0m1.5-10.5V5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75V2.75a.75.75 0 0 1 1.5 0M2.25 9.5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5H4.5V2.75a.75.75 0 0 0-1.5 0V9.5zm7.75.75a.75.75 0 0 1 .75-.75h.75V2.75a.75.75 0 0 1 1.5 0V9.5h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M3 12v1.25a.75.75 0 0 0 1.5 0V12zm8.5 1.25V12H13v1.25a.75.75 0 0 1-1.5 0"></svg:path>`,
})
export class HeroiconsAdjustmentsVertical16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
