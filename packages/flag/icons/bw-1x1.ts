import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBw1x1Icon],svg[flag-bw-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#00cbff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 192h512v128H0z"></svg:path><svg:path fill="#000001" d="M0 212.7h512V299H0z"></svg:path></svg:g>`,
})
export class FlagBw1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
