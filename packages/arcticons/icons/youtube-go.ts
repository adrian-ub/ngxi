import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYoutubeGoIcon],svg[arcticons-youtube-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.657 10.157C37.315 10.157 43.5 16.342 43.5 24s-6.185 13.843-13.843 13.843c-4.908 0-19.733-8.247-24.642-10.996a1.015 1.015 0 0 1 0-1.767l5.89-3.043l-2.159-1.375c-.687-.393-.589-1.374.098-1.669c4.32-2.356 16.886-8.835 20.813-8.835Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.137 24l-9.719-5.596v11.192z"></svg:path>`,
})
export class ArcticonsYoutubeGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
