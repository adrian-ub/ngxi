import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarForbiddenBoldIcon],svg[solar-forbidden-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13.151V10.85c0-1.226 0-1.84-.228-2.39c-.229-.552-.662-.986-1.53-1.853l-.893-.894L5.712 19.348l.894.895c.867.867 1.3 1.3 1.852 1.529s1.165.228 2.39.228h2.303c1.226 0 1.84 0 2.39-.228c.552-.229.986-.662 1.853-1.53l2.849-2.848c.867-.867 1.3-1.3 1.529-1.852c.228-.551.228-1.165.228-2.39M4.651 18.288l-.894-.894c-.867-.867-1.3-1.3-1.529-1.852S2 14.377 2 13.152v-2.303c0-1.226 0-1.84.228-2.39c.229-.552.662-.986 1.53-1.853l2.848-2.849c.867-.867 1.3-1.3 1.852-1.529S9.623 2 10.848 2h2.303c1.226 0 1.84 0 2.39.228c.552.229.986.662 1.853 1.53l.894.893z"></svg:path>`,
})
export class SolarForbiddenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
