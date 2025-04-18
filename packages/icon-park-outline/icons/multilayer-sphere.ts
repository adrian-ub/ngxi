import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMultilayerSphereIcon],svg[icon-park-outline-multilayer-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" d="M4.4 20c1.853 9.129 9.924 16 19.6 16s17.747-6.871 19.6-16"></svg:path><svg:path stroke-linecap="round" d="M5.664 16C8.75 23.064 15.8 28 24 28s15.25-4.936 18.336-12"></svg:path><svg:path stroke-linecap="round" d="M7.999 12c3.648 4.858 9.458 8 16.001 8s12.353-3.142 16.015-8M11.998 8c3.343 2.512 7.499 4 12.002 4s8.659-1.488 12.002-4"></svg:path></svg:g>`,
})
export class IconParkOutlineMultilayerSphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
