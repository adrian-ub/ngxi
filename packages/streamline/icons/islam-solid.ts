import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineIslamSolidIcon],svg[streamline-islam-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.325.003a7 7 0 1 0 3.529 12.92a.5.5 0 0 0-.264-.923a5 5 0 0 1 0-10a.5.5 0 0 0 .264-.923A7 7 0 0 0 7.325.003m4.87 4.941a.5.5 0 0 0-.894.002l-.4.806h-.774a.5.5 0 0 0-.359.848l.635.654l-.17.944a.5.5 0 0 0 .745.52l.776-.454l.822.46a.5.5 0 0 0 .733-.542l-.201-.936l.627-.646a.5.5 0 0 0-.358-.848h-.775z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineIslamSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
