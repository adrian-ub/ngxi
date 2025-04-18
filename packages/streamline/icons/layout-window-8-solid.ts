import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLayoutWindow8SolidIcon],svg[streamline-layout-window-8-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v1.375h14V1.5A1.5 1.5 0 0 0 12.5 0zM0 8.375v-4.25h6.375v4.25zm0 1.25V12.5A1.5 1.5 0 0 0 1.5 14h4.875V9.625zm7.625 0V14H12.5a1.5 1.5 0 0 0 1.5-1.5V9.625zM14 8.375v-4.25H7.625v4.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLayoutWindow8SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
