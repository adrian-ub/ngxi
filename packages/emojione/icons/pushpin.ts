import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePushpinIcon],svg[emojione-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M24.5 35.5C17.8 42.9 2.9 60.9.6 63.1c0 0-.1 0-.1.1c-.9.9-.6 1.2.3.3c2-2 20.2-17.2 27.6-23.9z"></svg:path><svg:path fill="#c94747" d="M24.46 28.298L46.873 5.883L58.33 17.338L35.914 39.753z"></svg:path><svg:path fill="#ed4c5c" d="M43.6 54.6c.9-7.8-2.5-17.1-9.8-24.3S17.2 19.6 9.4 20.4zM64 22.9c-5.2.6-11.4-1.7-16.3-6.6S40.5 5.2 41.1 0z"></svg:path>`,
})
export class EmojionePushpinIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
