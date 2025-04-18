import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeStackIcon],svg[icomoon-free-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5L8 1L0 5l8 4zM8 2.328L13.345 5L8 7.672L2.655 5zm6.398 4.871L16 8l-8 4l-8-4l1.602-.801L8 10.398zm0 3L16 11l-8 4l-8-4l1.602-.801L8 13.398z"></svg:path>`,
})
export class IcomoonFreeStackIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
