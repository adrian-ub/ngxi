import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartCheckIcon],svg[tabler-heart-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19.5 12.572l-3 2.928M11 19a8917 8917 0 0 0-6.5-6.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M15 19l2 2l4-4"></svg:path>`,
})
export class TablerHeartCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
