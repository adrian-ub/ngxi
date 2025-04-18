import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInboxFavoriteHeartIcon],svg[streamline-inbox-favorite-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 9.5h-3a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V5"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24M10 8.991c1.17-2.595 3.5-1.293 3.5.651c0 2.555-3.5 3.858-3.5 3.858s-3.5-1.303-3.5-3.908c0-1.944 2.33-3.246 3.5-.601"></svg:path></svg:g>`,
})
export class StreamlineInboxFavoriteHeartIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
