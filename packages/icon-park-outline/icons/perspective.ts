import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePerspectiveIcon],svg[icon-park-outline-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 28v8l-13 2.6M44 28L4 32m40-4v-8M4 32v12l13-2.6M4 32V16m40 4v-8L31 9.4M44 20L4 16m0 0V4l13 2.6m14 2.8v29.2m0-29.2L17 6.6m14 32l-14 2.8m0-34.8v34.8"></svg:path>`,
})
export class IconParkOutlinePerspectiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
