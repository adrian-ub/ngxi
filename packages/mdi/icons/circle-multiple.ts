import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCircleMultipleIcon],svg[mdi-circle-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4a8 8 0 1 1-8 8a8 8 0 0 1 8-8M3 12a6 6 0 0 0 4 5.65v2.09A8 8 0 0 1 7 4.26v2.09A6 6 0 0 0 3 12"></svg:path>`,
})
export class MdiCircleMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
