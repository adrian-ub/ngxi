import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleIcon],svg[ph-megaphone-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m228.54 86.66l-176.06-54A16 16 0 0 0 32 48v144a16 16 0 0 0 16 16a16 16 0 0 0 4.52-.65L136 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 240 138v-36a16.09 16.09 0 0 0-11.46-15.34M136 165l-88 27V48l88 27Zm48 27h-32v-15.18l32-9.82Zm40-54h-.11L152 160.08V79.92l71.89 22h.11v36Z"></svg:path>`,
})
export class PhMegaphoneSimpleIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
