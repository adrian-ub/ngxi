import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPanoramaReduceIcon],svg[iconoir-panorama-reduce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 6.862v10.276a.615.615 0 0 1-.811.58C18.546 17.165 14.749 16 12 16s-6.546 1.166-8.189 1.717a.615.615 0 0 1-.811-.58V6.863c0-.418.415-.712.811-.58C5.454 6.835 9.251 8 12 8s6.546-1.166 8.189-1.717a.615.615 0 0 1 .811.58"></svg:path>`,
})
export class IconoirPanoramaReduceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
