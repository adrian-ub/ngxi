import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeSettingsIcon],svg[bytesize-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 2v4l-2 1l-3-3l-4 4l3 3l-1 2H2v6h4l1 2l-3 3l4 4l3-3l2 1v4h6v-4l2-1l3 3l4-4l-3-3l1-2h4v-6h-4l-1-2l3-3l-4-4l-3 3l-2-1V2Z"></svg:path><svg:circle cx="16" cy="16" r="4"></svg:circle></svg:g>`,
})
export class BytesizeSettingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
