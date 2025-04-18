import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBookOutlineIcon],svg[healthicons-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M30 19h-5v-5h-2v5h-5v2h5v5h2v-5h5z"></svg:path><svg:path fill-rule="evenodd" d="M9 10a5 5 0 0 1 5-5h24a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1H14a3 3 0 0 0-3 3v1h27v2H10a1 1 0 0 1-1-1zm5 25a4.98 4.98 0 0 0-3 1V10a3 3 0 0 1 3-3h23v28z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsBookOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
