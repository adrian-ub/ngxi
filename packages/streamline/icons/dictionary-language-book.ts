import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDictionaryLanguageBookIcon],svg[streamline-dictionary-language-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5 13.5H3a1.5 1.5 0 1 1 0-3h8.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H3a1.5 1.5 0 0 0-1.5 1.46v10m10-1.46v3"></svg:path><svg:path d="M8.051 5.002h2.316l-2.46 3.473h2.604M3.512 5.986l1.066-3.199a.4.4 0 0 1 .38-.274v0c.173 0 .327.11.382.274l1.066 3.199M3.898 4.828H6.02"></svg:path></svg:g>`,
})
export class StreamlineDictionaryLanguageBookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
