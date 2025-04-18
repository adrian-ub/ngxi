import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextTThinIcon],svg[ph-text-t-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 56v32a4 4 0 0 1-8 0V60h-64v136h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28V60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextTThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
