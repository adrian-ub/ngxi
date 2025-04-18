import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoHackerNewsIcon],svg[fontisto-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h24v24H0zm12.8 13.446l4.339-8.303h-1.871q-2.143 4.018-2.839 5.786l-.375.96l-.32-.75a49 49 0 0 0-3.022-6.243l.129.243H6.857l4.286 8.2v5.52H12.8z"></svg:path>`,
})
export class FontistoHackerNewsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
