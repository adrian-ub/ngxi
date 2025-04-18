import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAspectRatioOffIcon],svg[tabler-aspect-ratio-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"></svg:path><svg:path d="M7 12V9h2m8 3v1m-2 2h-1M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerAspectRatioOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
