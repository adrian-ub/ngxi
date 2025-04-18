import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPinterestIcon],svg[arcticons-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 44.23s5.36-22.32 5.89-23.72c-5.12.49-3.48 12.49 2.32 13.8c4.91 1.15 10.35-4.54 10.27-10.85S31.69 14 27 12.69s-12.15.31-14.13 6.87a10.53 10.53 0 0 0 3 11.47"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5"></svg:path>`,
})
export class ArcticonsPinterestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
