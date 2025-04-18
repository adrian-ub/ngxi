import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCeilingLightOutlineIcon],svg[mdi-ceiling-light-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.76 11l2 4H7.24l2-4zM13 4h-2v5H8l-4 8h16l-4-8h-3zm1 14h-4a2 2 0 1 0 4 0"></svg:path>`,
})
export class MdiCeilingLightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
