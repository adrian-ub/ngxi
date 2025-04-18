import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRadiatorDisabledIcon],svg[mdi-radiator-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12H4a2 2 0 0 0-2 2v8h2v-2h16v2h2v-8a2 2 0 0 0-2-2M7 17a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1zm4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1zm4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1zm4 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1a1 1 0 0 1 1 1z"></svg:path>`,
})
export class MdiRadiatorDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
