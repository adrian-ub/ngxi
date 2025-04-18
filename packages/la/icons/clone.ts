import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCloneIcon],svg[la-clone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v17h4v-2H7V7h13v2h2V5zm5 5v17h17V10zm2 2h13v13H12z"></svg:path>`,
})
export class LaCloneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
