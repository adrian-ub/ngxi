import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGameboySolidIcon],svg[streamline-gameboy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.558 14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H2.442a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zM9.412 7.608a1 1 0 0 0 1-1V2.926a1 1 0 0 0-1-1H4.59a1 1 0 0 0-1 1v3.682a1 1 0 0 0 1 1zm-5.138 3.936a.625.625 0 1 0 1.25 0v-.334h.335a.625.625 0 1 0 0-1.25h-.335v-.335a.625.625 0 1 0-1.25 0v.335H3.94a.625.625 0 1 0 0 1.25h.334zm5.226-.073a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGameboySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
