import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonBadgeFillIcon],svg[iconamoon-badge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a1 1 0 0 1 1-1h7.172a3 3 0 0 1 2.12.879l7 7a3 3 0 0 1 0 4.242l-5.17 5.172a3 3 0 0 1-4.243 0l-7-7A3 3 0 0 1 3 11.172zm6 3.5A1.5 1.5 0 0 0 7.5 9v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V9a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonBadgeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
