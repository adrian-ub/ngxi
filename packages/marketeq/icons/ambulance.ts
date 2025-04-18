import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAmbulanceIcon],svg[marketeq-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M10.083 35.417h-1.75a2.083 2.083 0 0 1-2.083-2.084V12.5a2.083 2.083 0 0 1 2.083-2.083h26.084a2.08 2.08 0 0 1 1.625.791l7.25 9.063c.294.366.455.822.458 1.292v11.77a2.084 2.084 0 0 1-2.083 2.084h-1.73m-8.917 0H19"></svg:path><svg:path stroke="#344054" d="M25 18.75v8.333m-6.25 8.334a4.166 4.166 0 1 1-8.332 0a4.166 4.166 0 0 1 8.332 0m20.833 0a4.166 4.166 0 1 1-8.332 0a4.166 4.166 0 0 1 8.332 0m-18.75-12.5h8.334z"></svg:path></svg:g>`,
})
export class MarketeqAmbulanceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
