import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaArchiveOutlineIcon],svg[eva-archive-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-2 5.22V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.22A3 3 0 0 0 21 6M6 5h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m12 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h12Z"></svg:path><svg:rect width="6" height="2" x="9" y="12" fill="currentColor" rx=".87" ry=".87"></svg:rect>`,
})
export class EvaArchiveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
