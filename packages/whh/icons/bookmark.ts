import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBookmarkIcon],svg[whh-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024L384 800L64 1024q-27 0-45.5-19T0 960V128q0-53 37.5-90.5T128 0h512q53 0 90.5 37.5T768 128v832q0 26-18.5 45t-45.5 19M461 332l-77-172l-77 172l-179 24l132 129l-34 187l158-92l158 92l-34-187l132-129z"></svg:path>`,
})
export class WhhBookmarkIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
