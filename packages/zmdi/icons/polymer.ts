import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPolymerIcon],svg[zmdi-polymer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m395 21l96 171l-96 171h-86l96-171l-55-99l-169 270H96L0 192L96 21h85L85 192l56 99L309 21z"></svg:path>`,
})
export class ZmdiPolymerIcon {
  readonly viewBox = input("0 0 496 384")
  readonly width = input("1.3em")
  readonly height = input("1em")
}
