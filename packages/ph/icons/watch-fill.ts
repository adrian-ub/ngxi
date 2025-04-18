import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWatchFillIcon],svg[ph-watch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m175.3 63.53l-6.24-34.38A16 16 0 0 0 153.32 16h-50.64a16 16 0 0 0-15.74 13.15L80.7 63.53a79.9 79.9 0 0 0 0 128.94l6.24 34.38A16 16 0 0 0 102.68 240h50.64a16 16 0 0 0 15.74-13.15l6.24-34.38a79.9 79.9 0 0 0 0-128.94M102.68 32h50.64l3.91 21.55a79.75 79.75 0 0 0-58.46 0Zm50.64 192h-50.64l-3.91-21.55a79.75 79.75 0 0 0 58.46 0ZM168 136h-40a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhWatchFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
