import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsIdentificationSolidIcon],svg[heroicons-identification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3zm4.125 3a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-3.873 8.703a4.126 4.126 0 0 1 7.746 0a.75.75 0 0 1-.351.92a7.5 7.5 0 0 1-3.522.877a7.5 7.5 0 0 1-3.522-.877a.75.75 0 0 1-.351-.92M15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5zM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsIdentificationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
