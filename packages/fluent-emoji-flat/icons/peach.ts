import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPeachIcon],svg[fluent-emoji-flat-peach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00D26A" d="M5.87 2.165h5.112A5.015 5.015 0 0 1 16 7.183h-5.11a5.015 5.015 0 0 1-5.02-5.018"></svg:path><svg:path fill="#00D26A" d="M16 7.183a5.015 5.015 0 0 1 5.018-5.018h5.112a5.015 5.015 0 0 1-5.018 5.018z"></svg:path><svg:path fill="#FF822D" d="M12.169 5.991C6.526 5.991 2 10.618 2 15.943c0 4.675 2.678 6.973 5.35 9.373c2.399 2.156 5.248 4.603 8.65 4.603s6.251-2.447 8.65-4.603c2.672-2.4 5.35-4.698 5.35-9.373c0-5.325-4.526-9.952-10.169-9.952c-1.3 0-2.723.217-3.807.65c-1.373-.481-2.482-.65-3.855-.65"></svg:path><svg:path fill="#FF6723" d="M19.057 6.016A11.49 11.49 0 0 1 24 15.465a1 1 0 1 1-2 0c0-4-2.473-7.424-5.974-8.824c.872-.349 1.961-.557 3.03-.625"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPeachIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
