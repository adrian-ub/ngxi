import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTrimIcon],svg[bx-trim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2m14-6l-.003 9H10v-3h4c1.103 0 2-.897 2-2v-4zM5 10h5V5h4l-.003 9H5z"></svg:path>`,
})
export class BxTrimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
