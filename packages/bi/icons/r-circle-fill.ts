import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biRCircleFillIcon],svg[bi-r-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002V12h1.335V8.924H8.52L9.98 12h1.52L9.856 8.701c.828-.299 1.495-1.101 1.495-2.238c0-1.488-1.03-2.461-2.74-2.461zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36c0-.913-.596-1.417-1.537-1.417z"></svg:path>`,
})
export class BiRCircleFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
