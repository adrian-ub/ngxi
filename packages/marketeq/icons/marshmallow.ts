import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMarshmallowIcon],svg[marketeq-marshmallow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m25 37.5l4.167-2.083m-4.167-25V6.25zm0 16.666V43.75z"></svg:path><svg:path stroke="#306CFE" d="M20.833 10.417h8.334A2.083 2.083 0 0 1 31.25 12.5v4.167a2.083 2.083 0 0 1-2.083 2.083h-8.334a2.083 2.083 0 0 1-2.083-2.083V12.5a2.083 2.083 0 0 1 2.083-2.083m0 8.333h8.334a2.083 2.083 0 0 1 2.083 2.083V25a2.083 2.083 0 0 1-2.083 2.083h-8.334A2.083 2.083 0 0 1 18.75 25v-4.167a2.083 2.083 0 0 1 2.083-2.083"></svg:path></svg:g>`,
})
export class MarketeqMarshmallowIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
