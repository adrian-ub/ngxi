import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLoadIcon],svg[tdesign-load-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1h1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12v-1h2v1a9 9 0 1 0 9-9h-1z"></svg:path>`,
})
export class TdesignLoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
