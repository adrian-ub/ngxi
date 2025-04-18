import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKurashiruIcon],svg[arcticons-kurashiru-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5zM24 24a18.5 18.5 0 0 0 18.5 18.5V24zM42.5 5.5C42.5 15.717 34.217 24 24 24c0-10.217 8.283-18.5 18.5-18.5"></svg:path>`,
})
export class ArcticonsKurashiruIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
