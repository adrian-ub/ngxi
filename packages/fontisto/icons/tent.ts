import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoTentIcon],svg[fontisto-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.36 21.44L13.174 3.996l2.101-3.6l-.686-.4l-1.872 3.213l-1.872-3.213l-.686.4l2.101 3.6L2.081 21.44H.001V24h25.446v-2.56zm-12.286-5.06a15 15 0 0 0 1.621-3.949l.023-.105c.966 3.835 3.282 7.017 6.401 9.085l.057.035H6.269a15.5 15.5 0 0 0 4.771-4.993l.039-.071z"></svg:path>`,
})
export class FontistoTentIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
