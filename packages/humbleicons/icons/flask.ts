import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsFlaskIcon],svg[humbleicons-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M9.5 10V4h5v6l4.743 5.174A2.88 2.88 0 0 1 17.12 20H6.88a2.88 2.88 0 0 1-2.123-4.826z"></svg:path><svg:path stroke-linecap="round" d="M8.5 4h7"></svg:path><svg:path d="M6 14c3.5 2 4 0 6 0s2.5 2 6 0"></svg:path></svg:g>`,
})
export class HumbleiconsFlaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
