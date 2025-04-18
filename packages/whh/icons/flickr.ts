import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFlickrIcon],svg[whh-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 568q-93 0-158.5-65.5T576 344t65.5-158.5T800 120t158.5 65.5T1024 344t-65.5 158.5T800 568m-576 0q-93 0-158.5-65.5T0 344t65.5-158.5T224 120t158.5 65.5T448 344t-65.5 158.5T224 568"></svg:path>`,
})
export class WhhFlickrIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
