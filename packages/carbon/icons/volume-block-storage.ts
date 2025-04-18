import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVolumeBlockStorageIcon],svg[carbon-volume-block-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-7v-7h7zm-5-2h3v-3h-3zm5 11h-7v-7h7zm-5-2h3v-3h-3zm14-7h-7v-7h7zm-5-2h3v-3h-3zm5 11h-7v-7h7zm-5-2h3v-3h-3z"></svg:path><svg:path fill="currentColor" d="M8 28H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7.586A2 2 0 0 1 13 4.586L16.414 8H28a2 2 0 0 1 2 2v8h-2v-8H15.586l-4-4H4v20h4Z"></svg:path>`,
})
export class CarbonVolumeBlockStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
