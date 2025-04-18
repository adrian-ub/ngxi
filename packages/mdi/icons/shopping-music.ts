import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShoppingMusicIcon],svg[mdi-shopping-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3m7 3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h2a5 5 0 0 1 5-5a5 5 0 0 1 5 5zM9 19l7.5-5L9 10z"></svg:path>`,
})
export class MdiShoppingMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
