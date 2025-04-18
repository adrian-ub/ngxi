import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggHelloIcon],svg[gg-hello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.5 12a5.5 5.5 0 0 1-1.725 4A5.48 5.48 0 0 1 12 17.5c-1.461 0-2.79-.57-3.775-1.5A5.5 5.5 0 0 1 6.5 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 7a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v10a6 6 0 0 1-6 6H1zm2.75 5a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgHelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
