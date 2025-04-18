import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLightlinkIcon],svg[token-lightlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.417 10.672a.61.61 0 0 1 0 .889a.71.71 0 0 1-.948 0l-1.423-1.334l-3.128 2.937a.71.71 0 0 1-.948 0a.6.6 0 0 1 0-.889l3.557-3.334l.045-.047a.7.7 0 0 1 .948 0z"></svg:path><svg:path fill="currentColor" d="M17.003 10.84a.6.6 0 0 1 0 .89l-3.556 3.329l-.046.047a.7.7 0 0 1-.948 0l-1.896-1.778a.61.61 0 0 1 0-.889a.71.71 0 0 1 .948 0l1.422 1.334l3.128-2.932a.71.71 0 0 1 .948 0m3.803.014a.71.71 0 0 0-.948 0l-1.891 1.778a.6.6 0 0 0 0 .889a.71.71 0 0 0 .948 0l1.896-1.778a.61.61 0 0 0-.005-.889m-16.665 2.3a.71.71 0 0 1-.948 0a.61.61 0 0 1 0-.89l1.896-1.777a.71.71 0 0 1 .949 0a.6.6 0 0 1 0 .889z"></svg:path>`,
})
export class TokenLightlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
