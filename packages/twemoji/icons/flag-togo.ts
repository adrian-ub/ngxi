import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagTogoIcon],svg[twemoji-flag-togo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#006A4E" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-1.2H0zm15.526-6.5H15.5l20.5.1v-5.2H15.526zM32 5H15.526v5.2H36V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#FFCE00" d="M15.526 15.333v.067H36v-5.2H15.526zM.026 20.5L0 25.8h36v-5.2l-20.5-.1z"></svg:path><svg:path fill="#D21034" d="M4 5C1.879 5 .161 6.656.026 8.743V20.5h15.5V5z"></svg:path><svg:path fill="#FFF" d="M12.339 11.413H8.885l-.013-.04L7.776 8l-.022.068l-1.087 3.345H3.078l2.858 2.077l.045.033l-1.067 3.285l-.042.129l2.904-2.11l2.903 2.11l-1.109-3.414l2.904-2.11z"></svg:path>`,
})
export class TwemojiFlagTogoIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
