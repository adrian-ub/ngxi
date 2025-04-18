import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDrinkableIcon],svg[arcticons-drinkable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.758 43.5h10.484M24 43.5V28.822L9.322 13.62h29.356L24 28.822"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.25 18.338s2.422-.734 3.67-.734s2.421.734 3.669.734s2.422-.734 3.67-.734s2.421.734 3.669.734s2.421-.754 3.67-.734c.552.009 1.614.377 1.614.377m-6.962-.167l4.273-8.412m1.751-3.446l.74-1.456"></svg:path><svg:circle cx="32.345" cy="7.676" r="1.887" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDrinkableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
