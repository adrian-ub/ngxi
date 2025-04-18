import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSadIcon],svg[icomoon-free-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M4 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-5.002 7.199l-1.286-.772C4.586 9.973 6.179 9 8 9s3.413.973 4.288 2.427l-1.286.772C10.39 11.181 9.275 10.5 8 10.5s-2.389.681-3.002 1.699"></svg:path>`,
})
export class IcomoonFreeSadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
