import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxFavoriteIcon],svg[streamline-inbox-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.45 7.336a.59.59 0 0 1 1.1 0l.64 1.63h1.71a.61.61 0 0 1 .56.39a.59.59 0 0 1-.16.65l-1.51 1.35l.64 1.28a.58.58 0 0 1-.12.69a.61.61 0 0 1-.7.1l-1.61-.91l-1.61.88a.61.61 0 0 1-.7-.1a.58.58 0 0 1-.12-.69l.64-1.28l-1.51-1.36a.59.59 0 0 1-.16-.65a.61.61 0 0 1 .56-.35h1.71zM4 9.5H1.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24"></svg:path></svg:g>`,
})
export class StreamlineInboxFavoriteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
