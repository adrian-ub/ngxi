import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPilIcon],svg[lets-icons-pil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m11 18l7-7a3.536 3.536 0 0 0-5-5l-7 7a3.536 3.536 0 0 0 5 5"></svg:path><svg:path d="M14.5 14.5a9.52 9.52 0 0 1-5-5v0"></svg:path></svg:g>`,
})
export class LetsIconsPilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
