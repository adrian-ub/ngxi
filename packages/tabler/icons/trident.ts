import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTridentIcon],svg[tabler-trident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 6l2-2v3a7 7 0 0 0 14 0V4l2 2"></svg:path><svg:path d="M12 21V3l-2 2m4 0l-2-2"></svg:path></svg:g>`,
})
export class TablerTridentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
