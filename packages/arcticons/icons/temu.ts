import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTemuIcon],svg[arcticons-temu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.761 40.397a7.74 7.74 0 0 0 7.726-8.187l-.715-12.325c-.4-6.895-6.107-12.282-13.014-12.282H18.242c-6.907 0-12.614 5.387-13.014 12.282L4.513 32.21a7.74 7.74 0 0 0 7.726 8.187z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.812 16.91a7.188 7.188 0 1 0 14.377 0"></svg:path>`,
})
export class ArcticonsTemuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
