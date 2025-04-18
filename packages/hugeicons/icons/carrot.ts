import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCarrotIcon],svg[hugeicons-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.2 9.075C6.1 11.177.635 20.002 2.316 21.684c1.682 1.68 10.507-3.783 12.609-5.884c2.1-2.102 3.362-3.362 0-6.725s-4.623-2.1-6.725 0m6.3 6.425L13 14m-6-3l1.5 1.5M9 19l-1-1m7-16c.518.519.855 1.633 0 3.111M22 9c-.518-.519-1.633-.856-3.11 0m.388-4.278l-1.944 1.944" color="currentColor"></svg:path>`,
})
export class HugeiconsCarrotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
