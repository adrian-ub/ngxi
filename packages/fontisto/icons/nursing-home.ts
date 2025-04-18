import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoNursingHomeIcon],svg[fontisto-nursing-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8.853l2.886 10.115c2.738-.403 5.899-.633 9.113-.633s6.375.23 9.467.675l-.353-.042l2.886-10.115C14.497 4.628 8.858 4.405 0 8.853m14.918 4.276h-2.071V15.2h-1.686v-2.071H9.09v-1.686h2.071V9.371h1.686v2.072h2.071z"></svg:path>`,
})
export class FontistoNursingHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
