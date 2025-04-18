import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiApplicationArrayIcon],svg[mdi-application-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-11 9H8v7h2v2H6V9h4zm8 9h-4v-2h2v-7h-2V9h4zm3-13H3V4h18z"></svg:path>`,
})
export class MdiApplicationArrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
