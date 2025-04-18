import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLinkInIcon],svg[icon-park-outline-link-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 12V4h16v8m0 24v8H16v-8m2-12H4m40 0H30m-6 10V14m-11 5l5 5l-5 5m22-10l-5 5l5 5"></svg:path>`,
})
export class IconParkOutlineLinkInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
