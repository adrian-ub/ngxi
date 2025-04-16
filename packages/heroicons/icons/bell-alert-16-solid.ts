import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBellAlert16SolidIcon],svg[heroicons-bell-alert-16-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3.6 1.7A.75.75 0 1 0 2.4.799a7 7 0 0 0-1.123 2.247a.75.75 0 1 0 1.44.418c.187-.644.489-1.24.883-1.764m10-.901a.75.75 0 1 0-1.2.9a5.5 5.5 0 0 1 .883 1.765a.75.75 0 1 0 1.44-.418A7 7 0 0 0 13.6.799"></svg:path><svg:path fill-rule="evenodd" d="M8 1a4 4 0 0 1 4 4v2.379c0 .398.158.779.44 1.06l1.267 1.268a1 1 0 0 1 .293.707V11a1 1 0 0 1-1 1h-2a3 3 0 1 1-6 0H3a1 1 0 0 1-1-1v-.586a1 1 0 0 1 .293-.707L3.56 8.44A1.5 1.5 0 0 0 4 7.38V5a4 4 0 0 1 4-4m0 12.5A1.5 1.5 0 0 1 6.5 12h3A1.5 1.5 0 0 1 8 13.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HeroiconsBellAlert16SolidIcon {
  readonly viewBox = input('0 0 16 16')
  readonly width = input('1em')
  readonly height = input('1em')
}
