import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNamurOkFilledIcon],svg[ix-namur-ok-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 85.333v341.333H85.333V85.333zm-57.813 70.187l-155.52 155.733l-70.187-70.4l-30.293 30.293l100.48 100.267l185.813-185.6z"></svg:path>`,
})
export class IxNamurOkFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
