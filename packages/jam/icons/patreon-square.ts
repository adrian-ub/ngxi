import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPatreonSquareIcon],svg[jam-patreon-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.464 5.206c-1.976 0-3.583 1.598-3.583 3.563c0 1.958 1.607 3.551 3.583 3.551c1.969 0 3.57-1.593 3.57-3.551a3.57 3.57 0 0 0-3.57-3.563m-6.38 9.49v-9.49h1.752v9.49z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamPatreonSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
