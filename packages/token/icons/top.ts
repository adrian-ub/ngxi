import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTopIcon],svg[token-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.004 3.986a2.003 2.003 0 1 0 0 4.007h1.001a2.004 2.004 0 0 0 0-4.007zm7.092 0h6.932a2.004 2.004 0 0 1 0 4.007h-4.315a.694.694 0 0 0-.694.695v9.317a2.009 2.009 0 1 1-4.018 0c.004-3.175.011-9.269.011-12.055c0-.769.403-1.963 2.083-1.963"></svg:path>`,
})
export class TokenTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
