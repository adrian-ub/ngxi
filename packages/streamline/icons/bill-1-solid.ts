import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBill1SolidIcon],svg[streamline-bill-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0C.699 0 0 .62 0 1.445v5.671c0 .824.699 1.445 1.5 1.445h11c.802 0 1.5-.62 1.5-1.445v-5.67C14 .62 13.302 0 12.5 0zM7 2.477a1.803 1.803 0 1 0 0 3.607a1.803 1.803 0 0 0 0-3.607M3.529 4.502a.752.752 0 1 1-1.504 0a.752.752 0 0 1 1.504 0m7.694.752a.752.752 0 1 0 0-1.504a.752.752 0 0 0 0 1.504M1.086 10.56a.75.75 0 0 1 .75-.75h10.329a.75.75 0 1 1 0 1.5H1.835a.75.75 0 0 1-.75-.75Zm1.689 1.906a.75.75 0 0 0 0 1.5h8.45a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBill1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
