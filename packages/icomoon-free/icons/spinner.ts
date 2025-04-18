import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSpinnerIcon],svg[icomoon-free-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 2m4.243 1.757a2 2 0 1 1 3.999-.001a2 2 0 0 1-3.999.001M13 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-1.757 4.243a1 1 0 1 1 2 0a1 1 0 0 1-2 0M7 14a1 1 0 0 1 2 0a1 1 0 0 1-2 0m-4.243-1.757a1 1 0 0 1 2 0a1 1 0 0 1-2 0m-.5-8.486a1.5 1.5 0 0 1 3 0a1.5 1.5 0 0 1-3 0M.875 8a1.125 1.125 0 1 1 2.25 0a1.125 1.125 0 0 1-2.25 0"></svg:path>`,
})
export class IcomoonFreeSpinnerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
