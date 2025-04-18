import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMl1x1Icon],svg[flag-ml-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="red" d="M340.6 0H512v512H340.6z"></svg:path><svg:path fill="#009a00" d="M0 0h170.3v512H0z"></svg:path><svg:path fill="#ff0" d="M170.3 0h171.2v512H170.3z"></svg:path></svg:g>`,
})
export class FlagMl1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
