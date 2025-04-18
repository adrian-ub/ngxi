import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRibbonIcon],svg[mynaui-ribbon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 9A6 6 0 1 1 6 9a6 6 0 0 1 12 0"></svg:path><svg:path d="m8 13.472l-1 6.44c0 .81 1.782 1.336 2.447.974l2.106-1.147a.93.93 0 0 1 .894 0l2.106 1.147c.665.362 2.447-.165 2.447-.975l-1-6.439"></svg:path></svg:g>`,
})
export class MynauiRibbonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
