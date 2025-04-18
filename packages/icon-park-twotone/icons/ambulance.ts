import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAmbulanceIcon],svg[icon-park-twotone-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAmbulance0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linejoin="round" d="M10 35H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h25a2 2 0 0 1 2 2v6.899a3 3 0 0 0 1.975 2.82l7.05 2.563A3 3 0 0 1 44 26.102V33a2 2 0 0 1-2 2h-4m-20 0h12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 19h8m-4-4v8"></svg:path><svg:circle cx="14" cy="35" r="4" fill="#555"></svg:circle><svg:circle cx="34" cy="35" r="4" fill="#555"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAmbulance0)"></svg:path>`,
})
export class IconParkTwotoneAmbulanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
