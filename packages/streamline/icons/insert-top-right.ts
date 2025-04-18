import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopRightIcon],svg[streamline-insert-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1H5M.5 4H5M.5 7H5M.5 13h13m-13-3h13M8 7h5a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 13 1H8a.5.5 0 0 0-.5.5v5A.5.5 0 0 0 8 7"></svg:path>`,
})
export class StreamlineInsertTopRightIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
