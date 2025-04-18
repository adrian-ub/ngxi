import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsModxIcon],svg[fa6-brands-modx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m356 241.8l36.7 23.7V480l-133-83.8zM440 75H226.3l-23 37.8l153.5 96.5zm-89 142.8L55.2 32v214.5l46 29zM97 294.2L8 437h213.7l125-200.5z"></svg:path>`,
})
export class Fa6BrandsModxIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
