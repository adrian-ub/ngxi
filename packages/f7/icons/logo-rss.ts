import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LogoRssIcon],svg[f7-logo-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 37a8 8 0 1 1 0 16a8 8 0 0 1 0-16M3 3c27.614 0 50 22.386 50 50h-8c0-23.196-18.804-42-42-42zm0 15c19.33 0 35 15.67 35 35h-8c0-14.912-12.088-27-27-27z"></svg:path>`,
})
export class F7LogoRssIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
