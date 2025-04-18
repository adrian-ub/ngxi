import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBugleIcon],svg[mdi-bugle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6c0 5-9 5-9 5H5c-1 0-2-1-2-1H2v4h1s1-1 2-1h1.3c-.8.5-1.3 1.2-1.3 2c0 1.8 2.3 3 5.5 3s5.5-1.2 5.5-3c0-.6-.3-1.2-.8-1.7c2.6.5 5.8 1.7 5.8 4.7h1V6zM10.5 16.7c-2.3 0-4.1-.8-4.1-1.7s1.8-1.7 4.1-1.7s4.1.8 4.1 1.7s-1.8 1.7-4.1 1.7"></svg:path>`,
})
export class MdiBugleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
