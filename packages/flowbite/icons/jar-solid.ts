import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteJarSolidIcon],svg[flowbite-jar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h1a1 1 0 0 1 .295 1.956c.611.767 1.317 1.842 1.59 3.044H11a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9v.002A4 4 0 0 1 16 23H8c-2.208 0-4-1.788-4-3.998V11c0-1.598.928-3.07 1.705-4.044A1 1 0 0 1 6 5h1z"></svg:path><svg:path d="M20 17v-5h-8v5z"></svg:path></svg:g>`,
})
export class FlowbiteJarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
