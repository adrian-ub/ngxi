import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiamond2Icon],svg[streamline-diamond-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.638 1.54H3.362a1.07 1.07 0 0 0-.85.46L.692 4.52a1.05 1.05 0 0 0 .06 1.29L6.21 12.1a1 1 0 0 0 1.58 0l5.457-6.29a1.05 1.05 0 0 0 .06-1.29L11.488 2a1.07 1.07 0 0 0-.85-.46"></svg:path><svg:path d="M6.48 1.53L4.04 5.31L7 12.46m.55-10.93l2.43 3.78L7 12.46M.52 5.31h12.96"></svg:path></svg:g>`,
})
export class StreamlineDiamond2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
