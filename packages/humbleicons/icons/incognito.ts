import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsIncognitoIcon],svg[humbleicons-incognito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M10 15.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm9 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 15l.211-.106a4 4 0 0 1 3.578 0L14 15m3-6l-1.65-4.125a1 1 0 0 0-1.245-.577l-1.473.491a2 2 0 0 1-1.264 0L9.894 4.3a1 1 0 0 0-1.245.576L7 9m-4 1c7.5-1 11-1 18 0"></svg:path></svg:g>`,
})
export class HumbleiconsIncognitoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
