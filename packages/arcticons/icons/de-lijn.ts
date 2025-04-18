import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDeLijnIcon],svg[arcticons-de-lijn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.273 22.991h2.47l.871-4.94h-2.47zl-1.6-4.94h-2.47l-.871 4.94h2.47l.871-4.94m-8.282 4.94l.871-4.94h2.47l-.544 3.088c-.18 1.023-1.156 1.852-2.179 1.852h-1.853m-2.834-4.94l-.435 2.47h2.47l.436-2.47zm-1.86 4.94h-4.94l.871-4.94h2.47l-.87 4.94m30.506 2.47H19.19L16.186 42.5m6.523-37l-1.777 10.08H42.5"></svg:path>`,
})
export class ArcticonsDeLijnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
