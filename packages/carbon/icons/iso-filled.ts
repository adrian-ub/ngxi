import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIsoFilledIcon],svg[carbon-iso-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13h3v6h-3z"></svg:path><svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M8 21H6V11h2Zm9-8h-5v2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5v-2h5v-2h-3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h5Zm9 6a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class CarbonIsoFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
