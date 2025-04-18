import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGn1x1Icon],svg[flag-gn-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="red" d="M0 0h170.7v512H0z"></svg:path><svg:path fill="#ff0" d="M170.7 0h170.6v512H170.7z"></svg:path><svg:path fill="#090" d="M341.3 0H512v512H341.3z"></svg:path></svg:g>`,
})
export class FlagGn1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
