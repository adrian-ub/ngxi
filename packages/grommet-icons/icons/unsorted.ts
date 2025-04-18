import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsUnsortedIcon],svg[grommet-icons-unsorted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.204 15.321l1.597-1.597l.707.707l-2.45 2.45l-.354.354l-.353-.353l-2.45-2.45l.707-.708l1.596 1.597V7.217h1zm-5.9-6.407v8.104h1V8.914l1.597 1.597l.707-.707l-2.45-2.45L9.803 7l-.354.354L7 9.804l.707.707z" clip-rule="evenodd"></svg:path>`,
})
export class GrommetIconsUnsortedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
