import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTeaCupSolidIcon],svg[streamline-tea-cup-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.262.77a.75.75 0 1 0-1.5 0v.73a.75.75 0 1 0 1.5 0zm7.461 6.46v-2.5h.5a1.25 1.25 0 0 1 0 2.5zm0 1.5h.5a2.75 2.75 0 1 0 0-5.5h-9.5a1 1 0 0 0-1 1v4.5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5M.777 12.48a.75.75 0 0 0 0 1.5h12.446a.75.75 0 0 0 0-1.5zM8.487.02a.75.75 0 0 1 .75.75v.73a.75.75 0 1 1-1.5 0V.77a.75.75 0 0 1 .75-.75M6.25.77a.75.75 0 0 0-1.5 0v.73a.75.75 0 1 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTeaCupSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
