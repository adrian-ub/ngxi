import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasMarkdownMarkSolidIcon],svg[pajamas-markdown-mark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.846 12.923H1.154A1.154 1.154 0 0 1 0 11.77V4.231a1.154 1.154 0 0 1 1.154-1.154h13.692A1.154 1.154 0 0 1 16 4.23v7.538a1.154 1.154 0 0 1-1.154 1.154Zm-11-2.308v-3l1.539 1.923l1.538-1.923v3h1.539v-5.23H6.923L5.385 7.308L3.846 5.385H2.308v5.23zM14.154 8h-1.539V5.385h-1.538V8H9.538l2.308 2.692z"></svg:path>`,
})
export class PajamasMarkdownMarkSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
