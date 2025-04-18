import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBridgeDuotoneIcon],svg[ph-bridge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 168H24v-52.65A64 64 0 0 0 64 56a64 64 0 0 0 128 0a64 64 0 0 0 40 59.35Z" opacity=".2"></svg:path><svg:path d="M232 160h-32v-58.66a71.9 71.9 0 0 0 29 21.42a8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0a56 56 0 0 1-112 0a8 8 0 0 0-16 0a55.78 55.78 0 0 1-35 51.93a8 8 0 0 0 6 14.83a71.9 71.9 0 0 0 29-21.42V160H24a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-88-33.8V160h-32v-33.8a72 72 0 0 0 32 0m-72-25a72.5 72.5 0 0 0 24 19.27V160H72Zm88 58.8v-39.52a72.5 72.5 0 0 0 24-19.27V160Z"></svg:path></svg:g>`,
})
export class PhBridgeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
