import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBook1Icon],svg[subway-book-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.3 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2c-64-53.3-170.7-53.3-234.7 0M0 50.2v426.7c64-53.3 170.7-53.3 234.7 0V50.2C170.7-3.1 64-3.1 0 50.2"></svg:path>`,
})
export class SubwayBook1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
