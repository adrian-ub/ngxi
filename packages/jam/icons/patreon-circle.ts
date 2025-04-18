import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPatreonCircleIcon],svg[jam-patreon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M11.464 5.206c-1.976 0-3.583 1.598-3.583 3.563c0 1.958 1.607 3.551 3.583 3.551c1.969 0 3.57-1.593 3.57-3.551a3.57 3.57 0 0 0-3.57-3.563m-6.38 9.49v-9.49h1.752v9.49z"></svg:path></svg:g>`,
})
export class JamPatreonCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
