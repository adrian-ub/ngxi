import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoVuejsIcon],svg[fontisto-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.313 0h5.688l-14 24l-14-24h11l3 5.563L17.501 0zM3.5 2L14 20L24.5 2h-3.375L14 14.375L6.875 2z"></svg:path>`,
})
export class FontistoVuejsIcon {
  readonly viewBox = input("0 0 28 24")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
