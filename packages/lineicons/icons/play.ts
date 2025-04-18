import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPlayIcon],svg[lineicons-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.436 13.917c1.43-.878 1.43-2.956 0-3.834l-9.884-6.07c-1.499-.92-3.427.159-3.427 1.918V18.07c0 1.759 1.928 2.838 3.427 1.917zm-.785-2.556a.75.75 0 0 1 0 1.278l-9.884 6.069a.75.75 0 0 1-1.142-.64V5.932a.75.75 0 0 1 1.142-.639z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsPlayIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
