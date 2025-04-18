import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatGlassOfMilkIcon],svg[fluent-emoji-flat-glass-of-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#AEDDFF" d="m4.01 3.066l3.78 26.127a.95.95 0 0 0 .937.807h14.546a.934.934 0 0 0 .937-.807l3.78-26.127A.942.942 0 0 0 27.054 2H4.947a.942.942 0 0 0-.938 1.066"></svg:path><svg:path fill="#F3EEF8" d="m6.51 9.295l2.461 17.167c.04.309.31.538.62.538h12.806c.31 0 .58-.229.62-.538l2.47-17.167c.1-.688-.43-1.295-1.13-1.295H7.64c-.69 0-1.22.617-1.13 1.295"></svg:path><svg:path fill="#fff" d="M24.856 5.215a1 1 0 1 0-1.98-.284L19.713 27h2.02z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatGlassOfMilkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
