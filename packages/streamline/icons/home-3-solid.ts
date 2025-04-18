import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHome3SolidIcon],svg[streamline-home-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.318 6.045A1 1 0 0 0 0 6.776V12.5A1.5 1.5 0 0 0 1.5 14H6v-3a1 1 0 1 1 2 0v3h4.5a1.5 1.5 0 0 0 1.5-1.5V6.776a1 1 0 0 0-.318-.731L7.325.12a.5.5 0 0 0-.65 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineHome3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
