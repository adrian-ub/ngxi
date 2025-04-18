import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosVercelIconIcon],svg[logos-vercel-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m128 0l128 221.705H0z"></svg:path>`,
})
export class LogosVercelIconIcon {
  readonly viewBox = input("0 0 256 222")
  readonly width = input("1.16em")
  readonly height = input("1em")
}
