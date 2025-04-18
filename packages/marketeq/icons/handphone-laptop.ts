import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqHandphoneLaptopIcon],svg[marketeq-handphone-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M39.583 6.25H10.417a2.083 2.083 0 0 0-2.084 2.083V18.75h14.584A2.083 2.083 0 0 1 25 20.833V31.25h16.667V8.333a2.083 2.083 0 0 0-2.084-2.083M25 31.25v4.167h16.667a2.083 2.083 0 0 0 2.083-2.084V31.25z"></svg:path><svg:path stroke="#344054" d="M6.25 41.667V20.833a2.083 2.083 0 0 1 2.083-2.083h14.584A2.083 2.083 0 0 1 25 20.833v20.834a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083m7.292-18.75h4.166l1.042-4.167H12.5z"></svg:path></svg:g>`,
})
export class MarketeqHandphoneLaptopIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
