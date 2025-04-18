import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleDuotoneIcon],svg[ph-code-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m240 128l-72 64H88l-72-64l72-64h80Z" opacity=".2"></svg:path><svg:path d="M93.31 70L28 128l65.27 58a8 8 0 1 1-10.62 12l-72-64a8 8 0 0 1 0-12l72-64a8 8 0 1 1 10.66 12m152 52l-72-64a8 8 0 0 0-10.62 12L228 128l-65.27 58a8 8 0 1 0 10.62 12l72-64a8 8 0 0 0 0-12Z"></svg:path></svg:g>`,
})
export class PhCodeSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
