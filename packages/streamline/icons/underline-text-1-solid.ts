import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUnderlineText1SolidIcon],svg[streamline-underline-text-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.75.75a.75.75 0 0 0-1.5 0V7.5a3.75 3.75 0 1 0 7.5 0V.75a.75.75 0 0 0-1.5 0V7.5a2.25 2.25 0 0 1-4.5 0zm-4 11.75a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUnderlineText1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
