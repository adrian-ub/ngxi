import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortArrowLightIcon],svg[lets-icons-sort-arrow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 2l-.354-.354L8 1.293l.354.353zm.5 15a.5.5 0 0 1-1 0zM3.646 5.646l4-4l.708.708l-4 4zm4.708-4l4 4l-.708.708l-4-4zM8.5 2v15h-1V2zM16 22l-.354.354l.354.353l.354-.353zm.5-15a.5.5 0 0 0-1 0zm-4.854 11.354l4 4l.708-.708l-4-4zm4.708 4l4-4l-.708-.708l-4 4zM16.5 22V7h-1v15z"></svg:path>`,
})
export class LetsIconsSortArrowLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
