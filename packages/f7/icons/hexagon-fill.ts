import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7HexagonFillIcon],svg[f7-hexagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.586 42.941l16.266 9.235c2.789 1.593 5.46 1.617 8.296 0l16.266-9.235c2.18-1.242 3.375-2.507 3.375-5.906V18.801c0-3.305-1.219-4.5-3.21-5.649l-16.313-9.28c-2.906-1.665-5.696-1.641-8.532 0l-16.312 9.28C5.43 14.301 4.21 15.496 4.21 18.801v18.234c0 3.399 1.195 4.664 3.375 5.906"></svg:path>`,
})
export class F7HexagonFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
