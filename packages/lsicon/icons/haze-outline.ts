import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconHazeOutlineIcon],svg[lsicon-haze-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 8c0 1.38-1.62 2.5-3 2.5a2.5 2.5 0 0 1 0-5c1.38 0 3 1.12 3 2.5Zm0 0c0 1.38 1.62 2.5 3 2.5a2.5 2.5 0 0 0 0-5C9.62 5.5 8 6.62 8 8ZM2 2.5h12m-12 11h12"></svg:path>`,
})
export class LsiconHazeOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
