import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeDownload3Icon],svg[icomoon-free-download3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.5 7l-4 4l-4-4H6V1h3v6zm-4 4H0v4h15v-4zm6.5 2h-2v-1h2z"></svg:path>`,
})
export class IcomoonFreeDownload3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
