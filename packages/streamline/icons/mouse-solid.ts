import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMouseSolidIcon],svg[streamline-mouse-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.659 1.94A1.5 1.5 0 0 1 8.219 3v.25a2.75 2.75 0 0 0 5.5 0v-1.5a.75.75 0 0 0-1.5 0v1.5a1.25 1.25 0 0 1-2.5 0V3a3 3 0 0 0-5.93-.64a4.8 4.8 0 0 1 1.559.033a1.5 1.5 0 0 1 .31-.454Zm2.28 5.09A3.47 3.47 0 0 0 1 7.03v3.47a3.47 3.47 0 1 0 6.939 0zM5.094 5.97a.625.625 0 1 0-1.25 0v1a.625.625 0 1 0 1.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMouseSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
