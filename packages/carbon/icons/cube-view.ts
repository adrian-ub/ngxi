import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCubeViewIcon],svg[carbon-cube-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M23.777 15.479A8.64 8.64 0 0 0 16 10a8.64 8.64 0 0 0-7.777 5.479L8 16l.223.522A8.64 8.64 0 0 0 16 22a8.64 8.64 0 0 0 7.777-5.478L24 16ZM16 20a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="m28.504 8.136l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l12-7A1 1 0 0 0 29 23V9a1 1 0 0 0-.496-.864M27 22.426l-11 6.416l-11-6.416V9.574l11-6.416l11 6.416Z"></svg:path>`,
})
export class CarbonCubeViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
