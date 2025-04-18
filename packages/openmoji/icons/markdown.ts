import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMarkdownIcon],svg[openmoji-markdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M61 22.61H11v26.77h50z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M61.26 22.35H10.75v27.29h50.51z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.36" d="m46.537 44.84l8.833-9.874h-6.48l-.11-7.806h-4.616l.013 7.806h-6.473z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4.231" d="M30.76 43.41V28.6l-6.347 12.69l-6.347-12.69v14.81" clip-rule="evenodd"></svg:path><svg:path d="m46.537 44.84l8.833-9.874h-6.48l-.11-7.806h-4.616l.013 7.806h-6.473z"></svg:path>`,
})
export class OpenmojiMarkdownIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
