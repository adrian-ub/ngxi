import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShurikenIcon],svg[mdi-shuriken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 9.5L12 2L9.5 9.5L2 12l7.5 2.5L12 22l2.5-7.5L22 12zM12 13.7c-.9 0-1.7-.7-1.7-1.7c0-.9.7-1.7 1.7-1.7c.9 0 1.7.7 1.7 1.7c0 .9-.8 1.7-1.7 1.7"></svg:path>`,
})
export class MdiShurikenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
