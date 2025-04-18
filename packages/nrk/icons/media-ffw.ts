import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaFfwIcon],svg[nrk-media-ffw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.331 7l3.5 5l-3.5 5h-3.052l3.5-5l-3.5-5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m8.331 7l3.5 5l-3.5 5H5.279l3.5-5l-3.5-5z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaFfwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
