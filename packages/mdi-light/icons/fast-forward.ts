import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFastForwardIcon],svg[mdi-light-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.4 12.5L12 18.38L11 19v-5.62l-8 5L2 19V6l9 5.62V6zm-1.9 0L12 7.8v9.4zm-9 0L3 7.8v9.4z"></svg:path>`,
})
export class MdiLightFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
