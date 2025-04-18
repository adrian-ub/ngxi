import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsFullScreenIcon],svg[akar-icons-full-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 7V2h5m15 5V2h-5M7 22H2v-5m15 5h5v-5"></svg:path>`,
})
export class AkarIconsFullScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
