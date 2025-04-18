import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInsertTopRightSolidIcon],svg[streamline-insert-top-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.75.25a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5zM8 .5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zM0 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 0 4m.75 2.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM0 10a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 10m.75 2.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInsertTopRightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
