import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAlignVerticalCenterIcon],svg[mdi-align-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-5V6h-3v5h-4V3H7v8H1.8v2H7v8h3v-8h4v5h3v-5h5z"></svg:path>`,
})
export class MdiAlignVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
