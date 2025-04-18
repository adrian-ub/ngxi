import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBuilding4FillIcon],svg[ri-building-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM8 11v2h3v-2zm0-4v2h3V7zm0 8v2h3v-2zm5 0v2h3v-2zm0-4v2h3v-2zm0-4v2h3V7z"></svg:path>`,
})
export class RiBuilding4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
