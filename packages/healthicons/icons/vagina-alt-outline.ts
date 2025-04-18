import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAltOutlineIcon],svg[healthicons-vagina-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M35.434 6h1.86c3.127 7.848 4.714 14.106 4.706 19.852c-.008 5.614-1.538 10.66-4.504 16.148h-1.982c3.192-5.658 4.764-10.635 4.772-16.151C40.293 20.288 38.71 14.09 35.434 6M10.705 6h1.86c-3.277 8.09-4.858 14.288-4.85 19.849c.007 5.516 1.579 10.493 4.771 16.151h-1.982C7.538 36.511 6.008 31.466 6 25.852C5.992 20.106 7.579 13.848 10.705 6m12.438 25.546V42h1.714V31.546l7.022-7.373l-1.212-1.273l-6.667 7l-6.667-7l-1.212 1.273z"></svg:path><svg:path d="M23 26v3a1 1 0 1 0 2 0v-3a1 1 0 0 0-2 0"></svg:path></svg:g>`,
})
export class HealthiconsVaginaAltOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
