import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMegaphoneSimpleDuotoneIcon],svg[ph-megaphone-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M144 69.09v101.82l-93.76 28.76A8 8 0 0 1 40 192V48a8 8 0 0 1 10.24-7.67Z" opacity=".2"></svg:path><svg:path d="m228.54 86.66l-176.06-54A16 16 0 0 0 32 48v144a16 16 0 0 0 16 16a16 16 0 0 0 4.52-.65L136 181.73V192a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-29.9l28.54-8.75A16.09 16.09 0 0 0 240 138v-36a16.09 16.09 0 0 0-11.46-15.34M136 165l-88 27V48l88 27Zm48 27h-32v-15.18l32-9.82Zm40-54h-.11L152 160.08V79.92l71.89 22h.11v36Z"></svg:path></svg:g>`,
})
export class PhMegaphoneSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
