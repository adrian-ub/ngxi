import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMarkdownIcon],svg[logos-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M238.371 157.892H18.395C8.431 157.892 0 149.462 0 139.497V18.395C0 8.431 8.431 0 18.395 0h219.21C247.569 0 256 8.431 256 18.395v121.102c0 9.964-7.665 18.395-17.629 18.395M18.395 12.263c-3.066 0-6.132 3.066-6.132 6.132v121.102c0 3.832 3.066 6.132 6.132 6.132h219.21c3.832 0 6.132-3.066 6.132-6.132V18.395c0-3.832-3.066-6.132-6.132-6.132zM36.79 121.102V36.79h24.527l24.527 30.66l24.527-30.66h24.527v84.312h-24.527V72.814l-24.527 30.66l-24.527-30.66v48.288zm154.06 0l-36.79-40.623h24.527V36.79h24.527v42.923h24.527z"></svg:path>`,
})
export class LogosMarkdownIcon {
  readonly viewBox = input("0 0 256 158")
  readonly width = input("1.63em")
  readonly height = input("1em")
}
