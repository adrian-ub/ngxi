import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagIe1x1Icon],svg[flag-ie-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#009A49" d="M0 0h170.7v512H0z"></svg:path><svg:path fill="#FF7900" d="M341.3 0H512v512H341.3z"></svg:path></svg:g>`,
})
export class FlagIe1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
