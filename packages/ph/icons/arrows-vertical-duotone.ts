import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsVerticalDuotoneIcon],svg[ph-arrows-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M160 56v144l-32 32l-32-32V56l32-32Z" opacity=".2"></svg:path><svg:path d="M165.66 194.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69V43.31l-18.34 18.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0l32 32a8 8 0 0 1-11.32 11.32L136 43.31v169.38l18.34-18.35a8 8 0 0 1 11.32 0"></svg:path></svg:g>`,
})
export class PhArrowsVerticalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
