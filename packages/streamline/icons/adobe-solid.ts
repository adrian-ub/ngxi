import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAdobeSolidIcon],svg[streamline-adobe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.316.816a.5.5 0 0 1 .5-.5h12.368a.5.5 0 0 1 .5.5v12.368a.5.5 0 0 1-.5.5H.816a.5.5 0 0 1-.5-.5zM1.37 12.63L5.391 1.37h3.217l4.022 11.26H9.71L7 5.147l-1.678 5.07h1.556l.805 2.413H1.369Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAdobeSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
