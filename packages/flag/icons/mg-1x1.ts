import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMg1x1Icon],svg[flag-mg-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#fc3d32" d="M170.7 0H512v256H170.7z"></svg:path><svg:path fill="#007e3a" d="M170.7 256H512v256H170.7z"></svg:path><svg:path fill="#fff" d="M0 0h170.7v512H0z"></svg:path></svg:g>`,
})
export class FlagMg1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
