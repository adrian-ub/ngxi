import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFolderMinusIcon],svg[majesticons-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M5 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6.498A6.5 6.5 0 0 1 21 12.022V9a2 2 0 0 0-2-2h-5.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 8.93 4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.498 20v1a1 1 0 0 0 .923-1.385zM21 12.022l-.54.842a1 1 0 0 0 1.54-.842zm-9.594-5.913l.832-.554zm-.812-1.218l-.832.554zM4 6a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3zm0 12V6H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm6.498 0H5v2h6.498zm.923.615A5.5 5.5 0 0 1 12 17.5h-2c0 1.02.204 1.995.575 2.885zM12 17.5a5.5 5.5 0 0 1 5.5-5.5v-2a7.5 7.5 0 0 0-7.5 7.5zm5.5-5.5a5.47 5.47 0 0 1 2.96.864l1.08-1.684A7.47 7.47 0 0 0 17.5 10zM20 9v3.022h2V9zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zm-5.93 0H19V6h-5.93zm-2.496-1.336A3 3 0 0 0 13.07 8V6a1 1 0 0 1-.832-.445l-1.664 1.11zm-.812-1.219l.812 1.22l1.664-1.11l-.812-1.22zM8.93 5a1 1 0 0 1 .832.445l1.664-1.11A3 3 0 0 0 8.93 3zM5 5h3.93V3H5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18h6"></svg:path></svg:g>`,
})
export class MajesticonsFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
