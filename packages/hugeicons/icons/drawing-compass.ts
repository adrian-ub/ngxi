import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrawingCompassIcon],svg[hugeicons-drawing-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 10L5 22m9-12l5 12M12 4V2"></svg:path><svg:circle cx="12" cy="7" r="3"></svg:circle><svg:path d="M3 13c1.99 3.024 5.28 5 9 5s7.01-1.976 9-5m-9 4v2"></svg:path></svg:g>`,
})
export class HugeiconsDrawingCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
