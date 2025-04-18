import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDeathAlt2Icon],svg[healthicons-death-alt2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32.01 4.013L16.01 4L11 16.992l4.978 26.99l16 .018L37 17.013zM23 26v-8.003L20 18l-.002-2L23 15.998V13h2v2.996l2.998-.003l.002 2l-3 .003V26z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsDeathAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
