import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psSoundcloudIcon],svg[ps-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 238q0 24 18 39v-78Q2 215 2 238m37-49v98q5 2 15 2h5V187h-5q-5 0-15 2m43 6q-2 0-4-2v96h19V161q-12 15-15 34m34-52v146h20V133q-9 3-20 10m39-14v160h19V130q-4-1-12-1zm49 11q-11-5-20-8v157h29V129q-3 3-9 11m19-21v170h183q56-3 56-56q0-23-15.5-39.5T408 177q-10 0-22 5q-4-37-32-62t-66-25t-65 24"></svg:path>`,
})
export class PsSoundcloudIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
