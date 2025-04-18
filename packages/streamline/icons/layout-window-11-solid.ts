import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLayoutWindow11SolidIcon],svg[streamline-layout-window-11-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 0h-2.375v14H12.5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0M8.875 7.625V14H1.5A1.5 1.5 0 0 1 0 12.5V7.625zM0 6.375h8.875V0H1.5A1.5 1.5 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLayoutWindow11SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
