import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFlickrIcon],svg[fa-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1248 0q119 0 203.5 84.5T1536 288v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0zM698 768q0-88-62-150t-150-62t-150 62t-62 150t62 150t150 62t150-62t62-150m564 0q0-88-62-150t-150-62t-150 62t-62 150t62 150t150 62t150-62t62-150"></svg:path>`,
})
export class FaFlickrIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
