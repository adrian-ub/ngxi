import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfDownFilledIcon],svg[lsicon-shelf-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.207 2H4.793L2 4.793V14h12V4.793zm-7.5 2.5l1.5-1.5h5.586l1.5 1.5zM7.5 7v3.293L6.354 9.146l-.708.708L8 12.207l2.354-2.353l-.708-.708L8.5 10.293V7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShelfDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
