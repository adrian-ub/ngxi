import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMacadamiaNutIcon],svg[icon-park-outline-macadamia-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 43c10.493 0 19-8.059 19-18h-8l-3 3l-3-3H5c0 9.941 8.507 18 19 18m16.945-18c.124-.815 0-1.65 0-2.5C40.945 13.387 33.582 5 24.5 5c-3.823 0-8.338 1.309-11.131 3.504A5 5 0 0 1 14.033 11a4.986 4.986 0 0 1-6.004 4.895c-.63 1.75-.974 4.637-.974 6.605c0 .85-.124 1.685 0 2.5M6 31h10"></svg:path>`,
})
export class IconParkOutlineMacadamiaNutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
