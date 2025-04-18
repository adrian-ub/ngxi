import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsHtml5Icon],svg[fa6-brands-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 32l34.9 395.8L191.5 480l157.6-52.2L384 32zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4l-97.9 27v.3h-1.1l-98.7-27.3l-6-75.8h47.7L138 320l53.5 14.5l53.7-14.5l6-62.2H84.3L71.5 112.2h241.1z"></svg:path>`,
})
export class Fa6BrandsHtml5Icon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
