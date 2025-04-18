import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBalloonSolidIcon],svg[streamline-balloon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.404 11.172h-.932a.5.5 0 0 1-.386-.818l1.14-1.38c-.95-.196-1.784-.73-2.414-1.415C1.014 6.69.503 5.535.503 4.404c0-2.27 2.043-4.279 4.518-4.279c2.476 0 4.519 2.009 4.519 4.279c0 1.131-.511 2.286-1.31 3.155c-.623.679-1.448 1.21-2.386 1.41l1.116 1.39a.5.5 0 0 1-.39.813h-.93l.006.051c.042.551.188.884.345 1.085a1 1 0 0 0 .582.362c.5.118 1.128-.053 1.506-.296c.85-.546 1.593-.914 2.4-1.117c.805-.203 1.632-.23 2.633-.151a.625.625 0 1 1-.097 1.246c-.926-.073-1.605-.04-2.232.117c-.627.158-1.242.451-2.028.957c-.59.378-1.561.674-2.467.461a2.25 2.25 0 0 1-1.28-.808c-.347-.442-.553-1.031-.609-1.761a.6.6 0 0 1 .006-.146Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBalloonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
