import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderVideoFillIcon],svg[ri-folder-video-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 7.667a.4.4 0 0 1 0 .666l-4.878 3.252a.4.4 0 0 1-.622-.333V9.747a.4.4 0 0 1 .622-.333z"></svg:path>`,
})
export class RiFolderVideoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
