import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCi1x1Icon],svg[flag-ci-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#00cd00" d="M341.5 0H512v512H341.5z"></svg:path><svg:path fill="#ff9a00" d="M0 0h170.3v512H0z"></svg:path><svg:path fill="#fff" d="M170.3 0h171.2v512H170.3z"></svg:path></svg:g>`,
})
export class FlagCi1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
