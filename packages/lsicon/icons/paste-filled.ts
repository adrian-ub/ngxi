import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPasteFilledIcon],svg[lsicon-paste-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 2a.5.5 0 0 0-.5.5V4h1V3h7v7h-1v1h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm-3 3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zM4 9h5V8H4zm0 2h5v-1H4z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPasteFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
