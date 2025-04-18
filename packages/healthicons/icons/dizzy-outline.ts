import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDizzyOutlineIcon],svg[healthicons-dizzy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M28.707 17.293a1 1 0 0 0-1.414 1.414l1.793 1.793l-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793l1.793 1.793a1 1 0 0 0 1.414-1.414L31.914 20.5l1.793-1.793a1 1 0 0 0-1.414-1.414L30.5 19.086zm-13 0a1 1 0 0 0-1.414 1.414l1.793 1.793l-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793l1.793 1.793a1 1 0 0 0 1.414-1.414L18.914 20.5l1.793-1.793a1 1 0 0 0-1.414-1.414L17.5 19.086z"></svg:path><svg:path fill-rule="evenodd" d="M31 32c0 3.314-3.134 4-7 4s-7-.686-7-4s3.134-6 7-6s7 2.686 7 6m-2 0c0 .502-.114.763-.213.912c-.105.157-.295.339-.677.515c-.843.39-2.213.573-4.11.573c-1.896 0-3.267-.183-4.11-.573c-.382-.176-.572-.358-.677-.515c-.1-.149-.213-.41-.213-.912c0-1.931 1.938-4 5-4s5 2.069 5 4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m-2 0c0 8.837-7.163 16-16 16S8 32.837 8 24S15.163 8 24 8s16 7.163 16 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsDizzyOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
