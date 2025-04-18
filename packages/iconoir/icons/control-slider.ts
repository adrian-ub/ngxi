import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirControlSliderIcon],svg[iconoir-control-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m6.755 17.283l-1.429-10A2 2 0 0 1 7.306 5h3.388a2 2 0 0 1 1.98 2.283l-1.429 10A2 2 0 0 1 9.265 19h-.53a2 2 0 0 1-1.98-1.717Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 12h4m16 0H12"></svg:path></svg:g>`,
})
export class IconoirControlSliderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
