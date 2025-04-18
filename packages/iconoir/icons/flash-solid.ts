import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFlashSolidIcon],svg[iconoir-flash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.232 2.287A.75.75 0 0 1 13.75 3v6.25H19a.75.75 0 0 1 .607 1.191l-8 11a.75.75 0 0 1-1.357-.44v-6.25H5a.75.75 0 0 1-.607-1.192l8-11a.75.75 0 0 1 .839-.272" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
