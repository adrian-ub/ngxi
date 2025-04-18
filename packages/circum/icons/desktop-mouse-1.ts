import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumDesktopMouse1Icon],svg[circum-desktop-mouse-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.435 2.065h-2.87a6.5 6.5 0 0 0-6.5 6.5v6.87a6.5 6.5 0 0 0 6.5 6.5h2.87a6.5 6.5 0 0 0 6.5-6.5v-6.87a6.5 6.5 0 0 0-6.5-6.5m-8.37 6.5a5.51 5.51 0 0 1 5.5-5.5h.94v6.44h-6.44Zm13.87 6.87a5.5 5.5 0 0 1-5.5 5.5h-2.87a5.5 5.5 0 0 1-5.5-5.5v-4.93h13.87Zm0-5.93h-6.43v-6.44h.93a5.5 5.5 0 0 1 5.5 5.5Z"></svg:path>`,
})
export class CircumDesktopMouse1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
