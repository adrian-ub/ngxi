import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotEqualsDuotoneIcon],svg[ph-not-equals-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 56v144a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M224 160a8 8 0 0 1-8 8H102.45l-48.53 53.38a8 8 0 0 1-11.84-10.76L80.82 168H40a8 8 0 0 1 0-16h55.37L139 104H40a8 8 0 0 1 0-16h113.55l48.53-53.38a8 8 0 0 1 11.84 10.76L175.18 88H216a8 8 0 0 1 0 16h-55.37L117 152h99a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhNotEqualsDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
