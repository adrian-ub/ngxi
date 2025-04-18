import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVolumeLevelOffSolidIcon],svg[streamline-volume-level-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.716 1.779A1.454 1.454 0 0 1 9 3.005v8.006c-.026 1.186-1.403 1.882-2.374 1.21l-.008-.005L2.84 9.5H1.5C.68 9.5 0 8.82 0 8V6c0-.82.68-1.5 1.5-1.5h1.342l3.87-2.72l.003-.001Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineVolumeLevelOffSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
