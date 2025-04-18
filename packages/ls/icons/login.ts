import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsLoginIcon],svg[ls-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M391 672h195c37 0 68-13 92-38c24-24 39-56 39-92V151c0-36-15-68-39-92s-56-38-92-38H391v82h195c28 0 49 21 49 48v391c0 27-21 49-49 49H391zM0 269v156c0 18 15 33 33 33h182v123c0 11 5 20 15 25c4 1 9 1 11 1c7 0 13-2 18-7l235-235c9-9 8-27 0-37L259 94c-8-8-18-9-29-6q-15 7.5-15 24v124H33c-18 0-33 15-33 33"></svg:path>`,
})
export class LsLoginIcon {
  readonly viewBox = input("0 0 717 672")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
