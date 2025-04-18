import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenShxIcon],svg[token-shx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.35 3L3.31 20.385a.476.476 0 0 0 .447.615h16.49c.308 0 .529-.302.447-.61L15.776 3h-1.51l.245 1.161h-1.347V3H10.84v1.161H9.645L9.819 3H8.344z"></svg:path><svg:path fill="currentColor" d="m20.235 18.712l-8.222-4.366V3h1.15v1.161h1.353L14.272 3h1.51zm-16.455 0l8.222-4.366V3h-.825v1.161H9.493L9.743 3h-1.51z"></svg:path>`,
})
export class TokenShxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
