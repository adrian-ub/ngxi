import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCourtIcon],svg[icon-park-outline-court-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36h20V12H4v24zm0 0v-8m0-16v8"></svg:path><svg:circle cx="24" cy="24" r="4"></svg:circle><svg:path d="M11 24a4 4 0 0 1-4 4H4v-8h3a4 4 0 0 1 4 4m26 0a4 4 0 0 0 4 4h3v-8h-3a4 4 0 0 0-4 4"></svg:path></svg:g>`,
})
export class IconParkOutlineCourtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
