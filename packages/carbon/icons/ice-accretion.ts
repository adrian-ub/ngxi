import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIceAccretionIcon],svg[carbon-ice-accretion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v16l1 2l1-2V4h4v10l1 2l1-2V2zm24 0H14v8l1 2l1-2V4h2v13l1 2l1-2V4h4v10l1 2l1-2V4h2v20l1 2l1-2V4a2 2 0 0 0-2-2M14 28l-1 2l-1-2V16h2z"></svg:path><svg:path fill="currentColor" d="m24 26l-1 2l-1-2v-6h2zM8 24l-1 2l-1-2v-6h2z"></svg:path>`,
})
export class CarbonIceAccretionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
