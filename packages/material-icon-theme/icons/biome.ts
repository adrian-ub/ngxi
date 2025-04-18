import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBiomeIcon],svg[material-icon-theme-biome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42A5F5" d="M37 9L22.745 33.69a32.2 32.2 0 0 1 16.869-.584l4.818 1.137l-4.533 19.22l-4.825-1.137c-5.93-1.399-11.628 1.716-14.036 6.685l-4.46-2.158c3.404-7.029 11.425-11.285 19.637-9.347l2.259-9.58A27.23 27.23 0 0 0 5 64.424l64 .001z"></svg:path>`,
})
export class MaterialIconThemeBiomeIcon {
  readonly viewBox = input("0 0 74 74")
  readonly width = input("1em")
  readonly height = input("1em")
}
