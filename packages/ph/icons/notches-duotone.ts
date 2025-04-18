import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotchesDuotoneIcon],svg[ph-notches-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 40v152H40Z" opacity=".2"></svg:path><svg:path d="M195.06 32.61a8 8 0 0 0-8.72 1.73l-152 152A8 8 0 0 0 40 200h152a8 8 0 0 0 8-8V40a8 8 0 0 0-4.94-7.39M184 184H59.31L184 59.31Z"></svg:path></svg:g>`,
})
export class PhNotchesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
