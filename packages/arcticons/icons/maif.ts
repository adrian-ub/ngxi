import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaifIcon],svg[arcticons-maif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32.371 8.714L4.5 33.806l39 5.48zM31.859 24v6.638"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.392 30.631V24l3.319 6.638l3.319-6.628v6.628m12.586-3.319h2.158m-2.158 3.319V24h3.319"></svg:path><svg:path d="M28.38 28.418h-2.876"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24.787 30.618L26.945 24l2.157 6.638"></svg:path></svg:g>`,
})
export class ArcticonsMaifIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
