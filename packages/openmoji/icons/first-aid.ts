import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFirstAidIcon],svg[openmoji-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M27.67 43.857H13.72v-15.39l13.994.035l.018-14.118h15.729v13.95l13.817-.082v15.605H43.461v14.084H27.635z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.67 43.857H13.72v-15.39l13.994.035l.018-14.118h15.729v13.95l13.817-.082v15.605H43.461v14.084H27.635z"></svg:path>`,
})
export class OpenmojiFirstAidIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
