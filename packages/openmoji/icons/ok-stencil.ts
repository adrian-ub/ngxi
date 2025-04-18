import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiOkStencilIcon],svg[openmoji-ok-stencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#B1CC33" d="M59 60H13a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h46c.55 0 .998.447 1 1v46a.945.945 0 0 1-1 1"></svg:path><svg:path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M59 60H13a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h46c.55 0 .998.447 1 1v46a.945.945 0 0 1-1 1z"></svg:path><svg:path d="M39.099 41.6a1 1 0 0 1-1-1v-9.4a1 1 0 1 1 2 0v9.4a1 1 0 0 1-.999 1zm7.224-1.645l-3.714-4.41l3.205-3.69a1 1 0 0 0-1.51-1.312l-2.912 3.353v3.307l3.402 4.041a1 1 0 1 0 1.53-1.289m-16.461-.451a2.36 2.36 0 0 1-1.753-2.305v-2.7a2.36 2.36 0 0 1 1.753-2.304v-2.032a4.333 4.333 0 0 0-3.753 4.336v2.7a4.333 4.333 0 0 0 3.753 4.337zm1.293-9.341v2.032a2.36 2.36 0 0 1 1.753 2.304v2.7a2.36 2.36 0 0 1-1.753 2.305v2.032a4.333 4.333 0 0 0 3.753-4.337v-2.7a4.333 4.333 0 0 0-3.753-4.336"></svg:path>`,
})
export class OpenmojiOkStencilIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
