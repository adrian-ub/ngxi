import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBuilding2SolidIcon],svg[streamline-building-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.521.138a.5.5 0 0 0-.69 0l-3.676 3.5A.5.5 0 0 0 0 4v9.5a.5.5 0 0 0 .5.5h2.676v-2a1 1 0 1 1 2 0v2h2.677a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.156-.362zM9.77 6.5a.5.5 0 0 1 .5-.5h3.23a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3.231a.5.5 0 0 1-.5-.5zM2.173 7.763c0-.345.28-.625.625-.625h2.757a.625.625 0 1 1 0 1.25H2.798a.625.625 0 0 1-.625-.625m.625-3.232a.625.625 0 1 0 0 1.25h2.757a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBuilding2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
