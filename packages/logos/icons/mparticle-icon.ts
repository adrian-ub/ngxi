import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMparticleIconIcon],svg[logos-mparticle-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 106.654v53.308l-85.333 53.32v-53.32zm-85.333 0v53.308l-85.334 53.32v-53.32zm-85.334 0v53.308L0 213.282v-53.32zM256 0v53.32l-85.333 53.321v-53.32zm-85.333 0v53.32l-85.334 53.321v-53.32zM85.333 0v53.32L0 106.642v-53.32z"></svg:path>`,
})
export class LogosMparticleIconIcon {
  readonly viewBox = input("0 0 256 214")
  readonly width = input("1.2em")
  readonly height = input("1em")
}
