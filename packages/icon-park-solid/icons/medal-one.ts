import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMedalOneIcon],svg[icon-park-solid-medal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMedalOne0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m6 6l10 12M42 6L32 18M31 4l-5 12M17 4l5 12"></svg:path><svg:circle cx="24" cy="30" r="14" fill="#fff" stroke="#fff"></svg:circle><svg:circle cx="24" cy="30" r="7" fill="#000" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMedalOne0)"></svg:path>`,
})
export class IconParkSolidMedalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
