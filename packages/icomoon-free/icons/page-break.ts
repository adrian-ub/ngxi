import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePageBreakIcon],svg[icomoon-free-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8h2v1H0zm3 0h3v1H3zm4 0h2v1H7zm3 0h3v1h-3zm4 0h2v1h-2zm-.25-8L14 7H2l.25-7h.5L3 6h10l.25-6zM2.25 16L2 10h12l-.25 6h-.5L13 11H3l-.25 5z"></svg:path>`,
})
export class IcomoonFreePageBreakIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
