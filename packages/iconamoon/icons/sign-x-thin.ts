import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonSignXThinIcon],svg[iconamoon-sign-x-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M17 8h-.68a2.64 2.64 0 0 0-2.112 1.056l-4.416 5.888A2.64 2.64 0 0 1 7.68 16H7"></svg:path><svg:path d="M8 8h.368c1 0 1.915.565 2.362 1.46l2.54 5.08A2.64 2.64 0 0 0 15.632 16H16"></svg:path></svg:g>`,
})
export class IconamoonSignXThinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
