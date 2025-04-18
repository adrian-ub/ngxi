import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCitymoveIcon],svg[arcticons-citymove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="39.785" cy="39.535" r="1.679" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.878" cy="33.15" r="1.679" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.994 41.917a20.499 20.499 0 1 1-.538-36.122"></svg:path><svg:circle cx="39.752" cy="8.407" r="1.679" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.127 30.072c-2.75-7.154-.216-15.267 6.109-19.561a16.33 16.33 0 0 1 20.347 1.596m-.316 24.014c-6.254 5.71-16.038 5.697-22.275-.03"></svg:path>`,
})
export class ArcticonsCitymoveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
