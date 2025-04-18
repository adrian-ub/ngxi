import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiToasterIcon],svg[mdi-toaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2H2v2h1v7h18v-7h1v-2m-5 4a2 2 0 1 1 2-2a2 2 0 0 1-2 2m1-7H6c.33-2.25 2.88-4 6-4s5.63 1.75 6 4"></svg:path>`,
})
export class MdiToasterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
