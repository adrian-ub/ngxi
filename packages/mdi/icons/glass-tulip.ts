import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlassTulipIcon],svg[mdi-glass-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8c-.33.67-.67 1.33-.42 3s1.09 4.33.67 5.74c-.42 1.4-2.08 1.54-2.92 3.12c-.83 1.58-.83 4.61-.25 6.04c.59 1.43 1.75 1.27 2.34 1.35c.58.08.58.42.58.75H8c0-.33 0-.67.58-.75c.59-.08 1.75.08 2.34-1.35c.58-1.43.58-4.46-.25-6.04c-.84-1.58-2.5-1.72-2.92-3.12c-.42-1.41.42-4.07.67-5.74S8.33 2.67 8 2m2 2c0 1.19-.17 2.17-.36 3h4.63c-.14-.83-.27-1.81-.27-3z"></svg:path>`,
})
export class MdiGlassTulipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
