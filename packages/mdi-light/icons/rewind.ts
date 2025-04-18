import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightRewindIcon],svg[mdi-light-rewind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 12.5l9.4 5.88l1 .62v-5.62l8 5l1 .62V6l-9 5.62V6zm1.89 0l7.51-4.7v9.4zm9 0l7.51-4.7v9.4z"></svg:path>`,
})
export class MdiLightRewindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
