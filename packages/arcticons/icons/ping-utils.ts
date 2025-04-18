import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPingUtilsIcon],svg[arcticons-ping-utils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.829 26.801h9.202v9.202h-9.202zm0-14.804h9.202v9.202h-9.202zm14.389 4.601h9.954m-9.954 14.804h9.954"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.541 5.582h29.048a4.02 4.02 0 0 1 4.006 4.006v29.048a4.02 4.02 0 0 1-4.006 4.007H9.54a4.02 4.02 0 0 1-4.007-4.007V9.588A4.02 4.02 0 0 1 9.54 5.582"></svg:path>`,
})
export class ArcticonsPingUtilsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
