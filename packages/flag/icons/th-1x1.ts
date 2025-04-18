import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTh1x1Icon],svg[flag-th-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#f4f5f8" d="M0 0h512v512H0z"></svg:path><svg:path fill="#2d2a4a" d="M0 173.4h512V344H0z"></svg:path><svg:path fill="#a51931" d="M0 0h512v88H0zm0 426.7h512V512H0z"></svg:path></svg:g>`,
})
export class FlagTh1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
