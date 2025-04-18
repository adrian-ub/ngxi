import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDropboxIcon],svg[lineicons-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 13.032l5 3.193l5-3.193L7 9.87zm4.967 4.29L12 20.516l5-3.194l-5-3.193zM12 13.032l5 3.193l5-3.193l-5-3.162zM7 3.483L2 6.677L7 9.87l5-3.193zm15 3.194l-5-3.194l-5 3.194l5 3.193z"></svg:path>`,
})
export class LineiconsDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
