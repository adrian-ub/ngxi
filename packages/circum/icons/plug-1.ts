import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumPlug1Icon],svg[circum-plug-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.305 5.755H15.5v-3.21a.5.5 0 0 0-1 0v3.21h-5v-3.21a.5.5 0 0 0-1 0v3.21H6.7a1.566 1.566 0 0 0-1.57 1.57v4.28a7.046 7.046 0 0 0 6.37 7.11v2.72a.5.5 0 0 0 1 0v-2.7a6.874 6.874 0 0 0 6.38-6.86v-4.55a1.573 1.573 0 0 0-1.575-1.57m.57 6.12a5.875 5.875 0 0 1-6.06 5.87a6.054 6.054 0 0 1-5.69-6.14v-4.28a.563.563 0 0 1 .57-.57h10.61a.57.57 0 0 1 .57.57Z"></svg:path>`,
})
export class CircumPlug1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
