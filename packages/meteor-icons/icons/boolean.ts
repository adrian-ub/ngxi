import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBooleanIcon],svg[meteor-icons-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1m5 17a2 2 0 0 0 2-2m0-3.5v-2m0-3.5a2 2 0 0 0-2-2m-3.5 0h-2M11 9a2 2 0 0 0-2 2m0 3.5v2M9 20a2 2 0 0 0 2 2m3.5 0h2"></svg:path>`,
})
export class MeteorIconsBooleanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
