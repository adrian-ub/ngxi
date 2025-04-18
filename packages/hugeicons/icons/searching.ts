import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchingIcon],svg[hugeicons-searching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 10c-.49-.037-.83-.12-1.111-.309a2 2 0 0 1-.552-.554C2 8.63 2 7.925 2 6.515s0-2.116.337-2.622c.146-.22.333-.408.552-.555C3.393 3 4.096 3 5.5 3h13c1.404 0 2.107 0 2.611.338c.218.147.406.335.552.555C22 4.399 22 5.104 22 6.515c0 1.288 0 1.987-.256 2.485"></svg:path><svg:path d="M18.2 18.2L21 21m-1.4-7.7a6.3 6.3 0 1 0-12.6 0a6.3 6.3 0 0 0 12.6 0"></svg:path></svg:g>`,
})
export class HugeiconsSearchingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
