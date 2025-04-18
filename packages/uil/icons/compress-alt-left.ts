import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCompressAltLeftIcon],svg[uil-compress-alt-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 5.5a1 1 0 0 0-1 1v1.59l-5.79-5.8a1 1 0 0 0-1.42 1.42l5.8 5.79H6.5a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54a1 1 0 0 0 .08-.38v-4a1 1 0 0 0-1-1m11.21 14.79l-5.8-5.79h1.59a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54a1 1 0 0 0-.08.38v4a1 1 0 0 0 2 0v-1.59l5.79 5.8a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class UilCompressAltLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
