import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaperPlaneDuotoneIcon],svg[ph-paper-plane-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M221.28 215.51L128 184l-93.28 31.51a8 8 0 0 1-9.67-11.44l95.85-168a8 8 0 0 1 14 0l96.09 168a8 8 0 0 1-9.71 11.44" opacity=".2"></svg:path><svg:path d="M237.9 200.1L141.85 32.18a16 16 0 0 0-27.89 0l-95.89 168a16 16 0 0 0 19.26 22.92L128 192.45l90.67 30.63a16.2 16.2 0 0 0 5.33.92a16 16 0 0 0 13.86-23.9Zm-14.05 7.84L136 178.26V120a8 8 0 0 0-16 0v58.26l-87.84 29.68l-.16.06l95.86-168L224 208Z"></svg:path></svg:g>`,
})
export class PhPaperPlaneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
