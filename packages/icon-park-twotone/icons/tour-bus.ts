import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTourBusIcon],svg[icon-park-twotone-tour-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTourBus0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M9 23h30v11a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M9 8a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v15H9z"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 42a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3m18 0a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M6 12v4m36-4v4"></svg:path><svg:circle cx="15" cy="30" r="2" fill="#fff"></svg:circle><svg:circle cx="33" cy="30" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="m31 6l-9 10m16-9l-5 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTourBus0)"></svg:path>`,
})
export class IconParkTwotoneTourBusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
