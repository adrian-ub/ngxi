import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSdCardIcon],svg[ix-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M384 85.333v341.334H128V124.34l39.006-39.007zM85.333 426.667v-320l64-64h277.334v426.666H85.333zm266.667-320h-42.667V192H352zm-117.333 0h42.666V192h-42.666zm-32 0H160V192h42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxSdCardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
