import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLayoutDistributeVerticalIcon],svg[pixelarticons-layout-distribute-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6V4H4v2zm0 14v-2H4v2zM17 8v8h-2V8zm-8 6v-4h6V8H7v8h8v-2z"></svg:path>`,
})
export class PixelarticonsLayoutDistributeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
