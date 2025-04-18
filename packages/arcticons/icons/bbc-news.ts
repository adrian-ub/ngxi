import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBbcNewsIcon],svg[arcticons-bbc-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 18.772h13.138V31.91H5.5zM21.453 5.634H42.5v21.047H21.453zm0 23.862h8.043v12.87h-8.043z"></svg:path>`,
})
export class ArcticonsBbcNewsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
