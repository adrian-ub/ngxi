import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFlash2SolidIcon],svg[streamline-flash-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5.5a.5.5 0 0 0-.912-.283l-5.5 8A.5.5 0 0 0 2.5 9h3v4.5a.5.5 0 0 0 .912.283l5.5-8A.5.5 0 0 0 11.5 5h-3z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFlash2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
