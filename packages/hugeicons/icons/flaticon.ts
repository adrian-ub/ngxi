import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlaticonIcon],svg[hugeicons-flaticon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m4.424 10.25l5.191 8.83h0c.487.828.73 1.242.99 1.469c.691.603 1.632.601 2.32-.005c.26-.228.502-.643.986-1.474l-3.678-6.115L12.09 9.75H8.306L6.671 7.032h6.994L16 3H7.603c-3.27 0-4.906 0-5.45 1.24s.394 2.83 2.27 6.01"></svg:path><svg:path d="M21.835 4.22c.586 1.284-.425 2.93-2.447 6.221L15.373 17L13 13.21L19.158 3c1.463.11 2.306.407 2.677 1.22"></svg:path></svg:g>`,
})
export class HugeiconsFlaticonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
