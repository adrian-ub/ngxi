import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeUnlockedIcon],svg[icomoon-free-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c1.654 0 3 1.346 3 3v3h-2V4c0-.551-.449-1-1-1h-2c-.551 0-1 .449-1 1v3h.25c.412 0 .75.338.75.75v7.5c0 .412-.338.75-.75.75H.75a.753.753 0 0 1-.75-.75v-7.5C0 7.338.338 7 .75 7H7V4c0-1.654 1.346-3 3-3z"></svg:path>`,
})
export class IcomoonFreeUnlockedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
