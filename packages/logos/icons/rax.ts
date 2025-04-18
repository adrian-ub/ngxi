import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosRaxIcon],svg[logos-rax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F76927" d="m.61.667l62.848 64.059l103.504-.764s23.118 1.788 23.118 30.211c0 28.424-19.61 30.47-19.61 30.47l-42.732 1.146l58.56 61.224S256 171.199 256 94.413S176.607 0 176.607 0zM0 126.313h89.65l127.598 128.36l-90.652 1.76z"></svg:path>`,
})
export class LogosRaxIcon {
  readonly viewBox = input("0 0 256 257")
  readonly width = input("1em")
  readonly height = input("1em")
}
