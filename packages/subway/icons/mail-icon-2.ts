import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMailIcon2Icon],svg[subway-mail-icon-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341.3 32.7V113l90.3 90.3l-90.3 90.3V374L512 203.3zm50.2 170.6L220.9 32.7v106.6C-8.2 177.6 0 383.5 0 474.4c55.9-159.6 124.5-192.3 220.8-199V374z"></svg:path>`,
})
export class SubwayMailIcon2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
