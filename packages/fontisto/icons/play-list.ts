import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoPlayListIcon],svg[fontisto-play-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 24.001v-3.165h27.693v3.165zm0-7.912v-3.165h27.693v3.165zm0-7.055V.461A.505.505 0 0 1 .748.059L.745.058l8.483 4.273a.464.464 0 0 1 .003.836l-.003.001L.745 9.437a.5.5 0 0 1-.242.059h-.02A.484.484 0 0 1 0 9.035zm12.659-2.44V3.429h15.033v3.165z"></svg:path>`,
})
export class FontistoPlayListIcon {
  readonly viewBox = input("0 0 28 24")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
