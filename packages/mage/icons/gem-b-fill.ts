import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageGemBFillIcon],svg[mage-gem-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.276 10.394l-5.728-7.877a1.85 1.85 0 0 0-3 0l-5.727 7.877a2.7 2.7 0 0 0-.53 1.62a1 1 0 0 0 0 .18q0 .154.06.3c.057.411.215.803.46 1.139l5.728 7.877a2 2 0 0 0 .66.56a2 2 0 0 0 .68.18h.3a1.83 1.83 0 0 0 1.329-.74l5.728-7.877a2.6 2.6 0 0 0 .47-1.16a.14.14 0 0 0 0-.07q.014-.09 0-.18a.7.7 0 0 0 0-.2a2.72 2.72 0 0 0-.43-1.629M6.76 13.713l4.558 1.88v4.378zm6.058 6.248v-4.369l4.548-1.879z"></svg:path>`,
})
export class MageGemBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
