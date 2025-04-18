import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreePagebreakIcon],svg[icomoon-free-pagebreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V0h12v6h-1V1H5v5zm12 3v7H4V9h1v6h10V9zM8 7h2v1H8zM5 7h2v1H5zm6 0h2v1h-2zm3 0h2v1h-2zM0 4.5l3 3l-3 3z"></svg:path>`,
})
export class IcomoonFreePagebreakIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
