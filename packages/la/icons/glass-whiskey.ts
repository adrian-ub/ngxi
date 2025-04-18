import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGlassWhiskeyIcon],svg[la-glass-whiskey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.818 7l3.334 20h15.696L27.18 7zm2.364 2H24.82l-1.666 10H10.67l.33 2h11.82l-.666 4H9.848z"></svg:path>`,
})
export class LaGlassWhiskeyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
