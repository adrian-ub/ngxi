import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHsbcIcon],svg[arcticons-hsbc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.75 13.75L24 24l10.25-10.25zm20.5 20.5L24 24L13.75 34.25zm0 0L44.5 24L34.25 13.75zm-20.5-20.5L3.5 24l10.25 10.25z"></svg:path>`,
})
export class ArcticonsHsbcIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
