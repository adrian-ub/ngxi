import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBoomerangIcon],svg[mdi-boomerang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H4c-1.1 0-2 .9-2 2s.9 2 2 2h4zm8 0c2.2 0 4 1.8 4 4v6l-4 2c0-4.4-3.6-8-8-8l2-4zm0 18v-4l4-2v6c0 1.1-.9 2-2 2s-2-.9-2-2"></svg:path>`,
})
export class MdiBoomerangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
