import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGoToSearchIcon],svg[codicon-go-to-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.8 10.15L1 13.84l.75.66l3.78-3.67zM5.914 6l2.147-2.146v-.708L5.914 1l-.707.707L6.5 3H3a2.5 2.5 0 0 0-.348 4.976a7 7 0 0 1-.14-1.057A1.5 1.5 0 0 1 3 4h3.5L5.207 5.293z"></svg:path><svg:path d="m8.237 2.03l-.825-.825a5.499 5.499 0 0 1 5.903 8.576A5.5 5.5 0 0 1 3.423 7h.985a4.52 4.52 0 1 0 3.829-4.97"></svg:path></svg:g>`,
})
export class CodiconGoToSearchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
