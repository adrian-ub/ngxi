import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeEyePlusIcon],svg[icomoon-free-eye-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-2V0h-2v2h-2v2h2v2h2V4h2z"></svg:path><svg:path fill="currentColor" d="M13.498 6.969q.433.481.782 1.031a7.6 7.6 0 0 1-2.335 2.348a7.33 7.33 0 0 1-7.889 0A7.6 7.6 0 0 1 1.721 8a7.6 7.6 0 0 1 2.52-2.462A4 4 0 1 0 12 6.907v-.032a4 4 0 0 1-2.999-3.817A9 9 0 0 0 8 3.001c-3.489 0-6.514 2.032-8 5c1.486 2.968 4.511 5 8 5s6.514-2.032 8-5a9.2 9.2 0 0 0-.979-1.548a4 4 0 0 1-1.523.517zM6.5 5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 5"></svg:path>`,
})
export class IcomoonFreeEyePlusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
