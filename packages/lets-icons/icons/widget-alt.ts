import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWidgetAltIcon],svg[lets-icons-widget-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:rect width="6" height="6" rx="1" transform="matrix(1 0 0 -1 14 10)"></svg:rect><svg:path d="M10 14h4c.943 0 1.414 0 1.707.293S16 15.057 16 16v2c0 .943 0 1.414-.293 1.707S14.943 20 14 20h-4zm0-4c0-.943 0-1.414-.293-1.707S8.943 8 8 8H6c-.943 0-1.414 0-1.707.293S4 9.057 4 10v4h6zm0 10H6c-.943 0-1.414 0-1.707-.293S4 18.943 4 18v-4h6z"></svg:path></svg:g>`,
})
export class LetsIconsWidgetAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
