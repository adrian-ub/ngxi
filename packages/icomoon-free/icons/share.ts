import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeShareIcon],svg[icomoon-free-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10s.919-3 6-3v3l6-4l-6-4v3c-4 0-6 2.495-6 5m7 2H2V6h1.967q.237-.28.508-.534A6.9 6.9 0 0 1 6.914 4H0v10h13V9.803l-2 1.333z"></svg:path>`,
})
export class IcomoonFreeShareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
