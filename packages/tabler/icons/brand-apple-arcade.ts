import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAppleArcadeIcon],svg[tabler-brand-apple-arcade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 7.5v4.75a.7.7 0 0 1-.055.325a.7.7 0 0 1-.348.366l-5.462 2.58a5 5 0 0 1-4.27 0l-5.462-2.58a.705.705 0 0 1-.401-.691V12.5"></svg:path><svg:path d="m4.431 12.216l5.634-2.332a5.07 5.07 0 0 1 3.87 0l5.634 2.332a.692.692 0 0 1 .028 1.269l-5.462 2.543a5.06 5.06 0 0 1-4.27 0l-5.462-2.543a.691.691 0 0 1 .028-1.27zM12 7v6"></svg:path></svg:g>`,
})
export class TablerBrandAppleArcadeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
