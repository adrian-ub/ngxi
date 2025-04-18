import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiArtGallery11Icon],svg[maki-art-gallery-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.21 3L5.85.65a.5.5 0 0 0-.707-.003L5.14.65L2.79 3H1.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5H8.21zM5.5 1.71L6.79 3H4.21L5.5 1.71zM9 9H2V4h7v5zM4.5 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0zM8 8H4l.75-1.5l.5 1L6.5 5L8 8z" fill="currentColor"></svg:path>`,
})
export class MakiArtGallery11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
