import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightMinusIcon],svg[mdi-light-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 13v-1h13v1z"></svg:path>`,
})
export class MdiLightMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
