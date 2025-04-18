import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagAfghanistanIcon],svg[openmoji-flag-afghanistan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path d="M5 17h21v38H5z"></svg:path><svg:path fill="#5c9e31" d="M46 17h21v38H46z"></svg:path><svg:path fill="#fff" d="M36 48.88a12.89 12.89 0 0 1-9.111-22a.845.845 0 0 1 1.195 1.195a11.2 11.2 0 1 0 15.83 0a.845.845 0 1 1 1.195-1.195a12.89 12.89 0 0 1-9.111 22z"></svg:path><svg:path fill="#fff" d="M39.38 34.52h-6.76a.845.875 0 0 1 0-1.75h6.76a.845.875 0 0 1 0 1.75"></svg:path><svg:circle cx="36" cy="30.3" r="1.69" fill="#fff"></svg:circle><svg:path fill="#fff" d="M41.07 44.76H30.93a.845.875 0 0 1 0-1.75h10.14a.845.875 0 0 1 0 1.75"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.775" d="M32.58 28.68v15.07"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.766" d="M39.4 28.67v14.91"></svg:path><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".771" d="m27.461 37.656l2.08-3.604l1.393.804l-2.081 3.603zm15.003-3.606l2.08 3.603l-1.391.804l-2.08-3.604z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagAfghanistanIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
