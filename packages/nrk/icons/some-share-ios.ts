import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkSomeShareIosIcon],svg[nrk-some-share-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12v9H5v-9h2v-2H3v13h18V10h-4v2zM7 3.9L12 1l5 2.9v2.272l-5-2.9l-5 2.9z"></svg:path><svg:path fill="currentColor" d="M11 3h2v14h-2z"></svg:path>`,
})
export class NrkSomeShareIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
