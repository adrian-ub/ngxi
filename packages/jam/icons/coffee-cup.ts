import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCoffeeCupIcon],svg[jam-coffee-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a6 6 0 1 0 12 0V2H2zm14-4h1a3 3 0 0 1 0 6h-1.252A8 8 0 0 1 0 4V0zm0 4h1a1 1 0 0 0 0-2h-1z"></svg:path>`,
})
export class JamCoffeeCupIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
