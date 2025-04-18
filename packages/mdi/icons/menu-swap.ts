import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMenuSwapIcon],svg[mdi-menu-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6l-5 5h10zm-5 7l5 5l5-5z"></svg:path>`,
})
export class MdiMenuSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
