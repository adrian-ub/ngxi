import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCameraIcon],svg[icomoon-free-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 9.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 0 0-6.5 0M15 4h-3.5c-.25-1-.5-2-1.5-2H6C5 2 4.75 3 4.5 4H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m-7 9.938a4.438 4.438 0 1 1 0-8.876a4.438 4.438 0 0 1 0 8.876M15 7h-2V6h2z"></svg:path>`,
})
export class IcomoonFreeCameraIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
