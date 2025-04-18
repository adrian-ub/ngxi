import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCodeSimpleThinIcon],svg[ph-code-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M90.66 67L22 128l68.64 61a4 4 0 0 1-5.32 6l-72-64a4 4 0 0 1 0-6l72-64a4 4 0 1 1 5.32 6Zm152 58l-72-64a4 4 0 1 0-5.32 6L234 128l-68.64 61a4 4 0 0 0 5.32 6l72-64a4 4 0 0 0 0-6Z"></svg:path>`,
})
export class PhCodeSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
