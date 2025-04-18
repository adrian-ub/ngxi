import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightPlayIcon],svg[mdi-light-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.4 12.5L9 18.38L8 19V6zm-1.9 0L9 7.8v9.4z"></svg:path>`,
})
export class MdiLightPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
