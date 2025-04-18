import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMusic11Icon],svg[maki-music-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.5.5a.489.489 0 0 0-.22.05L3.5 2a.5.5 0 0 0-.5.5v4.59A1.5 1.5 0 1 0 4 8.5V5.38l5-1.25v1.46A1.5 1.5 0 1 0 10 7V1a.5.5 0 0 0-.5-.5zM4 4.38v-1.5l5-1.25v1.5L4 4.38z" fill="currentColor"></svg:path>`,
})
export class MakiMusic11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
