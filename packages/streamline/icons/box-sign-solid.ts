import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBoxSignSolidIcon],svg[streamline-box-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5zm3.5 8.375a.625.625 0 1 0 0 1.25h7a.625.625 0 1 0 0-1.25zm2.26-6.944a.63.63 0 0 1 .365.569v4.334a.625.625 0 0 1-1.25 0V4.87l-.966.837a.625.625 0 0 1-.818-.945l2-1.733a.63.63 0 0 1 .669-.097Zm3.15.097a.625.625 0 0 0-1.035.472v4.334a.625.625 0 0 0 1.25 0V4.87l.966.837a.625.625 0 0 0 .818-.945l-2-1.733Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBoxSignSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
