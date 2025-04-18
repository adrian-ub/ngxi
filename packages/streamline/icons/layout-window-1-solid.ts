import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLayoutWindow1SolidIcon],svg[streamline-layout-window-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0h3.375v14H1.5A1.5 1.5 0 0 1 0 12.5v-11A1.5 1.5 0 0 1 1.5 0m4.625 7.625V14H12.5a1.5 1.5 0 0 0 1.5-1.5V7.625zM14 6.375H6.125V0H12.5A1.5 1.5 0 0 1 14 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLayoutWindow1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
