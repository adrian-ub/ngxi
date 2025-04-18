import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMu1x1Icon],svg[flag-mu-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#009f4d" d="M0 384h512v128H0z"></svg:path><svg:path fill="#151f6d" d="M0 128h512v128H0z"></svg:path><svg:path fill="#ee2737" d="M0 0h512v128H0z"></svg:path><svg:path fill="#ffcd00" d="M0 256h512v128H0z"></svg:path></svg:g>`,
})
export class FlagMu1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
