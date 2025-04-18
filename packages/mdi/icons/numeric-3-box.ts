import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumeric3BoxIcon],svg[mdi-numeric-3-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10.5a1.5 1.5 0 0 1-1.5 1.5c.84 0 1.5.67 1.5 1.5V15c0 1.11-.89 2-2 2H9v-2h4v-2h-2v-2h2V9H9V7h4c1.11 0 2 .89 2 2m4-6H5c-1.09 0-2 .9-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiNumeric3BoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
