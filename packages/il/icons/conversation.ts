import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilConversationIcon],svg[il-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185 448h325v163q0 19-13 32t-34 14H185L69 750v-93H46q-19 0-32-14T0 611V309q0-19 14-33t32-13h139zM695 8q20 0 33 13t13 34v301q0 19-13 32t-33 14h-23v93l-116-93H232V55q0-20 13-34t33-13z"></svg:path>`,
})
export class IlConversationIcon {
  readonly viewBox = input("0 0 750 850")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
