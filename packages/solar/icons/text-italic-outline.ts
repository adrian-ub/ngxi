import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextItalicOutlineIcon],svg[solar-text-italic-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.983 1.25H9a.75.75 0 0 0 0 1.5h4.992l-5.55 18.5H3a.75.75 0 1 0 0 1.5h12a.75.75 0 0 0 0-1.5h-4.992l5.55-18.5H21a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarTextItalicOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
