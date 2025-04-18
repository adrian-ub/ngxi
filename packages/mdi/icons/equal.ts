import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEqualIcon],svg[mdi-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10H5V8h14zm0 6H5v-2h14z"></svg:path>`,
})
export class MdiEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
