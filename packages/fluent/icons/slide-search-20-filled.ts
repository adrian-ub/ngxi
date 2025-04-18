import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideSearch20FilledIcon],svg[fluent-slide-search-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.5A2.5 2.5 0 0 1 4.5 4h11A2.5 2.5 0 0 1 18 6.5v7a2.5 2.5 0 0 1-2.5 2.5h-5.379l-1.56-1.56A4.5 4.5 0 0 0 8.973 13H12.5a.5.5 0 0 0 0-1H8.973a4.5 4.5 0 0 0-.44-1.5H14.5a.5.5 0 0 0 0-1H7.854A4.5 4.5 0 0 0 4.5 8a4.5 4.5 0 0 0-2.5.758zm3.5.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-1 9c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 16m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class FluentSlideSearch20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
