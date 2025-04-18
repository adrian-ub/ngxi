import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMountainIcon],svg[hugeicons-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 20H2l3.225-9.244C6.795 6.252 7.58 4 9 4c1.337 0 2.112 2 3.512 6"></svg:path><svg:path d="M6 20h16l-4.593-7.341C15.88 10.219 15.117 9 14 9c-1.118 0-1.88 1.22-3.407 3.659L9.128 15"></svg:path></svg:g>`,
})
export class HugeiconsMountainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
