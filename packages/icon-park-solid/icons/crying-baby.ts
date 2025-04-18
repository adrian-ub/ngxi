import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCryingBabyIcon],svg[icon-park-solid-crying-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCryingBaby0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c9.941 0 18-8.059 18-18S33.941 8 24 8S6 16.059 6 26s8.059 18 18 18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 8c-.25-1-2-4-6-4m6 4c.083-1 .6-3.2 2-4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 35s-2-4-7-4s-7 4-7 4m17-15l-6-1m-8 0l-6 1m1 0v5m18-5v5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 24v4m40-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCryingBaby0)"></svg:path>`,
})
export class IconParkSolidCryingBabyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
