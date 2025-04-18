import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidCookieIcon],svg[fa6-solid-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247.2 17c-22.1-3.1-44.6.9-64.4 11.4l-74 39.5c-19.7 10.5-35.6 27-45.4 47.1l-36.7 75.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9l-14.6-82.8c-3.9-22.1-14.6-42.3-30.7-57.9l-60.2-58.3c-16.1-15.6-36.6-25.6-58.7-28.7zM208 144a32 32 0 1 1 0 64a32 32 0 1 1 0-64m-64 192a32 32 0 1 1 64 0a32 32 0 1 1-64 0m224-64a32 32 0 1 1 0 64a32 32 0 1 1 0-64"></svg:path>`,
})
export class Fa6SolidCookieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
