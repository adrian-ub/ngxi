import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVivoVivoIcon],svg[arcticons-vivo-vivo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.877 12.069c-8.894 0-10.872 12.99 0 23.862c10.858-10.858 8.894-23.862 0-23.862"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.684 19.056c6.289-6.29 16.873 1.499 16.873 16.873C8.201 35.93.394 25.345 6.684 19.056m34.633 0c-6.29-6.29-16.874 1.499-16.874 16.873c15.356 0 23.163-10.584 16.873-16.873"></svg:path>`,
})
export class ArcticonsVivoVivoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
