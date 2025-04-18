import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphBreakTwoIcon],svg[icon-park-paragraph-break-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9H42"></svg:path><svg:path d="M6 19H42"></svg:path><svg:path d="M6 29H24"></svg:path><svg:path d="M6 39H16"></svg:path><svg:path d="M24 39C24 39 34.2386 39 37 39C39.7614 39 42 36.7614 42 34C42 31.2386 39.7614 29 37 29C35.7115 29 32 29 32 29M24 39L28 35M24 39L28 43"></svg:path></svg:g>`,
})
export class IconParkParagraphBreakTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
