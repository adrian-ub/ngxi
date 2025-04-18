import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBoxesLightIcon],svg[lets-icons-boxes-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M6.5 6.3a1.8 1.8 0 0 1 1.8-1.8h6.4a1.8 1.8 0 0 1 1.8 1.8v5.2H8.3a1.8 1.8 0 0 1-1.8-1.8zm-2 7a1.8 1.8 0 0 1 1.8-1.8h6.2v8H6.3a1.8 1.8 0 0 1-1.8-1.8zm8-1.8h6.2a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8h-6.2z"></svg:path><svg:path stroke-linecap="round" d="M16.5 11.5v3m-8-3v3m3-10v3"></svg:path></svg:g>`,
})
export class LetsIconsBoxesLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
