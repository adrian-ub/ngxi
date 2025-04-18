import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCubeIcon],svg[charm-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 4.75L8 1.25l6.25 3.5v6.5L8 14.75l-6.25-3.5zM8 14V8m5.75-3L8 8M2 5l6 3"></svg:path>`,
})
export class CharmCubeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
