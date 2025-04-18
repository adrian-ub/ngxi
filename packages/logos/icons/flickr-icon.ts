import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFlickrIconIcon],svg[logos-flickr-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF0084" d="M199.111 113.778c31.42 0 56.889-25.47 56.889-56.89C256 25.476 230.53 0 199.111 0s-56.889 25.475-56.889 56.889c0 31.42 25.47 56.889 56.89 56.889"></svg:path><svg:path fill="#0063DC" d="M56.889 113.778c31.42 0 56.889-25.47 56.889-56.89C113.778 25.476 88.308 0 56.888 0C25.47 0 0 25.475 0 56.889c0 31.42 25.47 56.889 56.889 56.889"></svg:path>`,
})
export class LogosFlickrIconIcon {
  readonly viewBox = input("0 0 256 114")
  readonly width = input("2.25em")
  readonly height = input("1em")
}
