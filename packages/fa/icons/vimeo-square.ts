import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faVimeoSquareIcon],svg[fa-vimeo-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1292 510q10-216-161-222q-231-8-312 261q44-19 82-19q85 0 74 96q-4 57-74 167T796 903q-43 0-82-169q-13-54-45-255q-30-189-160-177q-59 7-164 100l-81 72l-81 72l52 67q76-52 87-52q57 0 107 179q15 55 45 164.5t45 164.5q68 179 164 179q157 0 383-294q220-283 226-444m244-222v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaVimeoSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
