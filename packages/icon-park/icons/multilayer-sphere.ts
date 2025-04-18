import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMultilayerSphereIcon],svg[icon-park-multilayer-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" d="M4.3999 20C6.25298 29.129 14.324 36 23.9998 36C33.6756 36 41.7466 29.129 43.5997 20"></svg:path><svg:path stroke-linecap="round" d="M5.66406 16C8.75028 23.0636 15.7986 28 23.9999 28C32.2012 28 39.2495 23.0636 42.3357 16"></svg:path><svg:path stroke-linecap="round" d="M7.99854 12C11.6474 16.8578 17.4567 20 24 20C30.5433 20 36.3526 16.8578 40.015 12"></svg:path><svg:path stroke-linecap="round" d="M11.998 8C15.341 10.5116 19.4967 12 24 12C28.5033 12 32.659 10.5116 36.0019 8"></svg:path></svg:g>`,
})
export class IconParkMultilayerSphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
