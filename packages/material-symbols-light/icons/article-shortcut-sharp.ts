import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArticleShortcutSharpIcon],svg[material-symbols-light-article-shortcut-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.221 21q-1.767 0-3.008-1.236T2.97 16.77q0-1.358.767-2.43t1.966-1.531H3v-1h4.539v4.538h-1v-2.771q-1.118.237-1.843 1.127t-.725 2.046q0 1.364.947 2.308q.948.944 2.303.944zM7.5 8.5h9v-1h-9zM9.923 20v-3.5H13.5v-1H9.923v-3H16.5v-1H9.923V9.423H4V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightArticleShortcutSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
