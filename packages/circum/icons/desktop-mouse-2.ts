import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumDesktopMouse2Icon],svg[circum-desktop-mouse-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.437 21.938h-2.874a6.51 6.51 0 0 1-6.5-6.5V8.562a6.51 6.51 0 0 1 6.5-6.5h2.874a6.51 6.51 0 0 1 6.5 6.5v6.876a6.51 6.51 0 0 1-6.5 6.5M10.563 3.062a5.506 5.506 0 0 0-5.5 5.5v6.876a5.506 5.506 0 0 0 5.5 5.5h2.874a5.506 5.506 0 0 0 5.5-5.5V8.562a5.506 5.506 0 0 0-5.5-5.5Z"></svg:path><svg:path fill="currentColor" d="M11.5 6.541v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0"></svg:path>`,
})
export class CircumDesktopMouse2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
