import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBluIcon],svg[arcticons-blu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.46 19.712v5.808a3.52 3.52 0 0 0 3.52 3.52h0a3.52 3.52 0 0 0 3.52-3.52v-5.808m0 5.808v3.521M23.438 14.96v12.32c0 .973.788 1.76 1.76 1.76h.528M12.5 23.232a3.52 3.52 0 0 1 3.52-3.52h0a3.52 3.52 0 0 1 3.52 3.52v2.288a3.52 3.52 0 0 1-3.52 3.52h0a3.52 3.52 0 0 1-3.52-3.52m0 3.521V14.959"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsBluIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
