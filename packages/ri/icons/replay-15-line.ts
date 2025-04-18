import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riReplay15LineIcon],svg[ri-replay-15-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 1.385-4.5H8v2H2v-6h2V6a9.99 9.99 0 0 1 8-4M8.5 15.5v-7H10v7zm3.5-7h4.75V10H13.5v1.25h1.375a2.125 2.125 0 0 1 0 4.25H12V14h2.875a.625.625 0 1 0 0-1.25H12z"></svg:path>`,
})
export class RiReplay15LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
