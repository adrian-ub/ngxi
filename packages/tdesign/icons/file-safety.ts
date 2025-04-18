import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileSafetyIcon],svg[tdesign-file-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V11.5h-2V9h-6V3H5v18h6.5v2H3zm12 2.414V7h3.586zM13.498 13.5h9v5.634a3 3 0 0 1-1.36 2.511l-3.14 2.052l-3.14-2.052a3 3 0 0 1-1.36-2.511zm2 2v3.634a1 1 0 0 0 .453.837l2.047 1.337l2.047-1.337a1 1 0 0 0 .453-.837V15.5z"></svg:path>`,
})
export class TdesignFileSafetyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
