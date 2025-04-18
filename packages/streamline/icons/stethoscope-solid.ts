import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStethoscopeSolidIcon],svg[streamline-stethoscope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.052 1.406a.75.75 0 0 1 .75-.75h1.094a.75.75 0 0 1 0 1.5h-.344V5a2.469 2.469 0 1 0 4.937 0V2.156h-.343a.75.75 0 1 1 0-1.5h1.093a.75.75 0 0 1 .75.75V5a3.97 3.97 0 0 1-3.156 3.886v.572a2.948 2.948 0 1 0 5.897 0V6.782a2.488 2.488 0 1 1 1.5-.003v2.679a4.448 4.448 0 0 1-8.897 0v-.549A3.97 3.97 0 0 1 .052 5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineStethoscopeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
