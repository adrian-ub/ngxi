import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidPaintedScreenIcon],svg[icon-park-solid-painted-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSPaintedScreen0"><svg:g fill="none"><svg:rect width="38" height="28" x="5" y="10" fill="#fff" stroke="#fff" stroke-width="4" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 24v-7"></svg:path><svg:rect width="4" height="4" x="15" y="29" fill="#000" rx="2" transform="rotate(90 15 29)"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSPaintedScreen0)"></svg:path>`,
})
export class IconParkSolidPaintedScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
