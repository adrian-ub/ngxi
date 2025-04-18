import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTurkeyIcon],svg[icon-park-twotone-turkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTurkey0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 36h40l-5 8H9z"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 30v6h26v-5c0-6-3-8-3-8c2-2.5 3-6 0-8s-5.5 0-7 2c0 0-16-2-16 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M21 24s-1 .5-2 2s-1 3-1 3"></svg:path><svg:path stroke="#fff" stroke-width="4" d="m39 9l-5 6"></svg:path><svg:circle cx="38.356" cy="7.483" r="2.5" fill="#fff" transform="rotate(35.072 38.356 7.483)"></svg:circle><svg:circle cx="40.811" cy="9.206" r="2.5" fill="#fff" transform="rotate(35.072 40.81 9.206)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTurkey0)"></svg:path>`,
})
export class IconParkTwotoneTurkeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
