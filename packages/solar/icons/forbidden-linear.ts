import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenLinearIcon],svg[solar-forbidden-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m18.5 5.5l-13 13"></svg:path><svg:path d="M22 10.849v2.302c0 1.226 0 1.84-.228 2.39c-.229.552-.662.986-1.53 1.853l-2.848 2.849c-.867.867-1.3 1.3-1.852 1.529c-.551.228-1.165.228-2.39.228h-2.303c-1.226 0-1.84 0-2.39-.228c-.552-.229-.986-.662-1.853-1.53l-2.849-2.848c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l2.849 2.848c.867.867 1.3 1.3 1.529 1.852S22 9.623 22 10.848Z"></svg:path></svg:g>`,
})
export class SolarForbiddenLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
