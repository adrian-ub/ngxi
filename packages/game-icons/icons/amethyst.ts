import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsAmethystIcon],svg[game-icons-amethyst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.183 408.608H26V103.313h59.183zm0-373.513L35.075 85.072h50.108zM408.72 85.15V25.967H103.386v59.184zM35.075 426.849l50.108 50.11v-50.11zM476.978 85.164l-50.109-50.109v50.109zm-68.311 341.685H103.386v59.184h305.281zm.42-323.536v305.124H103.965V103.313h305.124zm-21.91 17.098H121.062v268.482c13.152-230.342 44.059-239.548 266.115-268.482M486 103.313h-59.183v305.295H486zm-59.183 373.619l50.108-50.109h-50.108z"></svg:path>`,
})
export class GameIconsAmethystIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
