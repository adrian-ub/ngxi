import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWatch2SolidIcon],svg[streamline-watch-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.44.44A1.5 1.5 0 0 1 5.5 0h3A1.5 1.5 0 0 1 10 1.5v.25h.5c.966 0 1.75.784 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75H10v.25A1.5 1.5 0 0 1 8.5 14h-3A1.5 1.5 0 0 1 4 12.5v-.25h-.5a1.75 1.75 0 0 1-1.75-1.75v-7c0-.966.784-1.75 1.75-1.75H4V1.5c0-.398.158-.78.44-1.06M3.25 3.5a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v7a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWatch2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
