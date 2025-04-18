import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsShareIcon],svg[flat-color-icons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1976D2" d="M38.1 31.2L19.4 24l18.7-7.2c1.5-.6 2.3-2.3 1.7-3.9c-.6-1.5-2.3-2.3-3.9-1.7l-26 10C8.8 21.6 8 22.8 8 24s.8 2.4 1.9 2.8l26 10c.4.1.7.2 1.1.2c1.2 0 2.3-.7 2.8-1.9c.6-1.6-.2-3.3-1.7-3.9"></svg:path><svg:g fill="#1E88E5"><svg:circle cx="11" cy="24" r="7"></svg:circle><svg:circle cx="37" cy="14" r="7"></svg:circle><svg:circle cx="37" cy="34" r="7"></svg:circle></svg:g>`,
})
export class FlatColorIconsShareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
