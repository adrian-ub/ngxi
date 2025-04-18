import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faShareAltIcon],svg[fa-share-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1216 896q133 0 226.5 93.5T1536 1216t-93.5 226.5T1216 1536t-226.5-93.5T896 1216q0-12 2-34l-360-180q-92 86-218 86q-133 0-226.5-93.5T0 768t93.5-226.5T320 448q126 0 218 86l360-180q-2-22-2-34q0-133 93.5-226.5T1216 0t226.5 93.5T1536 320t-93.5 226.5T1216 640q-126 0-218-86L638 734q2 22 2 34t-2 34l360 180q92-86 218-86"></svg:path>`,
})
export class FaShareAltIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
