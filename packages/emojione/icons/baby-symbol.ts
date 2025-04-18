import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBabySymbolIcon],svg[emojione-baby-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#eda454"></svg:circle><svg:g fill="#fff"><svg:path d="M37 19.5c0 1.2-1.2 2.5-2.5 2.5h-5c-1.2 0-2.5-1.2-2.5-2.5v-5c0-1.2 1.2-2.5 2.5-2.5h5c1.2 0 2.5 1.2 2.5 2.5zM31 41l-5-3l-3 7l3 7l3-1l-2-6zm2 0l5-3l3 7l-3 7l-3-1l2-6z"></svg:path><svg:path d="M36 24h-8.1L20 21l-1 2l7 5v6q0 3 3 3h6q3 0 3-3v-6l7-5l-1-2z"></svg:path></svg:g>`,
})
export class EmojioneBabySymbolIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
