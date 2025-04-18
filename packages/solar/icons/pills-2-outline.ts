import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPills2OutlineIcon],svg[solar-pills-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.25a5.73 5.73 0 0 0-4.066 1.684A5.75 5.75 0 1 0 8 1.25m3.489 8.178L5.572 3.511a4.25 4.25 0 0 1 5.917 5.917M4.51 4.572l5.917 5.917A4.25 4.25 0 0 1 4.51 4.572m16.556 8.362a5.75 5.75 0 1 0-8.132 8.132a5.75 5.75 0 0 0 8.132-8.132m-7.071 1.06a4.25 4.25 0 0 1 7.189 2.256h-8.368a4.23 4.23 0 0 1 1.179-2.255m-1.179 3.756h8.368a4.25 4.25 0 0 1-8.368 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPills2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
