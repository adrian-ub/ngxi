import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeEnlarge2Icon],svg[icomoon-free-enlarge2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0v6.5L13.5 4l-3 3L9 5.5l3-3L9.5 0zM7 10.5l-3 3L6.5 16H0V9.5L2.5 12l3-3z"></svg:path>`,
})
export class IcomoonFreeEnlarge2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
