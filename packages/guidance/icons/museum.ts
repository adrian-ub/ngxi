import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceMuseumIcon],svg[guidance-museum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M19.5 10.5V19m-10-8.5V19m-5-8.5V19m10-8.5V19M2 21h20M0 23.5h24m-.5-15.75v.75H.5v-.75C5 6 9.186 3.577 11.438.875L11.75.5h.5l.312.375C14.814 3.577 19 6 23.5 7.75Z"></svg:path>`,
})
export class GuidanceMuseumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
