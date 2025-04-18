import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoNewsIcon],svg[entypo-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 5h-4v2h4zm0 3h-4v1h4zM9 5H6v4h3zm0 6h5v-1H9zm3 2h2v-1h-2zm2 1H6v1h8zm-3-2H6v1h5zm-3-2H6v1h2zm9-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m-1 16H4V3h12z" clip-rule="evenodd"></svg:path>`,
})
export class EntypoNewsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
