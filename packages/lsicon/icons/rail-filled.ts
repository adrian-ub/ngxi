import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRailFilledIcon],svg[lsicon-rail-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 .793L13.707 4.5l-3 3l2.5 2.5L8.5 14.707L2.293 8.5zM9.793 7l1-1H6.207l-1 1zM4.207 8l-.5.5l.5.5h6.586l-1-1zm7.586 2H5.207l1 1h4.586zm-2 2H7.207L8.5 13.293zM7.207 5h4.586l.5-.5l-.5-.5H8.207zm2-2h1.586L10 2.207z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRailFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
