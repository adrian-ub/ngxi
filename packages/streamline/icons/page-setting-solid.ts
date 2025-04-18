import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePageSettingSolidIcon],svg[streamline-page-setting-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.565 5.626L10.21.334a.604.604 0 0 1 1.08 0l2.646 5.292a.604.604 0 0 1-.54.874H8.104a.604.604 0 0 1-.54-.874ZM.5.5A.5.5 0 0 0 0 1v5a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 6 6V1a.5.5 0 0 0-.5-.5zM6 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.5 1.5a.75.75 0 0 0 0 1.5H13a.75.75 0 0 0 0-1.5zM7.75 11a.75.75 0 0 1 .75-.75H13a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1-.75-.75m.75-3a.75.75 0 0 0 0 1.5H13A.75.75 0 0 0 13 8z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePageSettingSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
