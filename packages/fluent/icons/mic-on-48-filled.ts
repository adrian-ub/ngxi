import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMicOn48FilledIcon],svg[fluent-mic-on-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M24 4a8 8 0 0 0-8 8v12a8 8 0 1 0 16 0V12a8 8 0 0 0-8-8z" fill="currentColor"></svg:path><svg:path d="M25 37.715c7.265-.513 13-6.57 13-13.965a1.25 1.25 0 1 0-2.5 0c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5a1.25 1.25 0 1 0-2.5 0c0 7.225 5.473 13.172 12.5 13.92v5.08a1.25 1.25 0 1 0 2.5 0v-5.035z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMicOn48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
