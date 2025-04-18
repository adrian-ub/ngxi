import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSofaSingleIcon],svg[mdi-sofa-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 9.15V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2.16c-1.16.41-2 1.51-2 2.81V14H7v-2.04c0-1.29-.84-2.4-2-2.81M20 10c-1.1 0-2 .9-2 2v3H6v-3a2 2 0 1 0-4 0v5c0 1.1.9 2 2 2v2h2v-2h12v2h2v-2c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiSofaSingleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
