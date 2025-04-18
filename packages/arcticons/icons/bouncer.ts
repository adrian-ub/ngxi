import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBouncerIcon],svg[arcticons-bouncer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="15.153" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.669" ry="10.653"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.597 20.192a9.56 9.56 0 0 0-7.011 9.207V43.5h32.828V29.399a9.56 9.56 0 0 0-7.012-9.207m-15.185-8.154h3.898a.91.91 0 0 1 .912.912v1.549a2 2 0 0 1-2.001 2.001h-1.72a2 2 0 0 1-2.002-2.001V12.95a.91.91 0 0 1 .913-.912m7.668 0h3.899a.91.91 0 0 1 .912.912v1.549a2 2 0 0 1-2.002 2.001h-1.72a2 2 0 0 1-2.001-2.001V12.95a.91.91 0 0 1 .912-.912m-.912 1.905h-1.946"></svg:path>`,
})
export class ArcticonsBouncerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
