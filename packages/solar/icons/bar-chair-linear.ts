import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBarChairLinearIcon],svg[solar-bar-chair-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.06 1.06 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917z"></svg:path><svg:path stroke-linecap="round" d="M9 8L6 22m9-14l3 14m-1-5H7"></svg:path></svg:g>`,
})
export class SolarBarChairLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
