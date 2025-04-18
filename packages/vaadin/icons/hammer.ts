import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinHammerIcon],svg[vaadin-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 2l7 7l3-3l-4.48-4.48S8.55 2.55 7 1zm2.8 3.79L.27 14.31a1 1 0 0 0 0 1.361a1 1 0 0 0 1.371.049l8.569-8.519z"></svg:path>`,
})
export class VaadinHammerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
