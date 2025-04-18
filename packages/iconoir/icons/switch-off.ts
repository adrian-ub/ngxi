import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSwitchOffIcon],svg[iconoir-switch-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M17 17H7A5 5 0 0 1 7 7h10a5 5 0 0 1 0 10Z"></svg:path></svg:g>`,
})
export class IconoirSwitchOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
