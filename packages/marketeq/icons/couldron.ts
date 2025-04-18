import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCouldronIcon],svg[marketeq-couldron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m39.583 39.583l-3.979-7.958m-25.187 7.958l3.979-7.958"></svg:path><svg:path stroke="#306CFE" d="M39.417 10.417H10.583a16.36 16.36 0 0 0-2.25 8.333a16.667 16.667 0 1 0 33.334 0c.01-2.93-.768-5.807-2.25-8.333"></svg:path><svg:path stroke="#344054" d="M6.25 10.417h37.5"></svg:path></svg:g>`,
})
export class MarketeqCouldronIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
