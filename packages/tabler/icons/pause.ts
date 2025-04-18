import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPauseIcon],svg[tabler-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="icon-tabler" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><svg:rect x="4" y="4" width="6" height="16" rx="2"></svg:rect><svg:rect x="14" y="4" width="6" height="16" rx="2"></svg:rect></svg:g>`,
})
export class TablerPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
