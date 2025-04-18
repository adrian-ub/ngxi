import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorAddStarburst48Icon],svg[fluent-color-add-starburst-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorAddStarburst480)" d="M25.183 2.58a1.5 1.5 0 0 0-2.368 0l-3.388 4.356l-5.112-2.078a1.5 1.5 0 0 0-2.051 1.184l-.756 5.467l-5.467.756a1.5 1.5 0 0 0-1.184 2.05l2.078 5.113l-4.356 3.388a1.5 1.5 0 0 0 0 2.368l4.356 3.388l-2.078 5.113a1.5 1.5 0 0 0 1.184 2.05l5.467.757l.756 5.466a1.5 1.5 0 0 0 2.05 1.184l5.113-2.078l3.388 4.356a1.5 1.5 0 0 0 2.368 0l3.388-4.356l5.113 2.078a1.5 1.5 0 0 0 2.05-1.184l.756-5.466l5.467-.757a1.5 1.5 0 0 0 1.184-2.05l-2.078-5.113l4.356-3.388a1.5 1.5 0 0 0 0-2.368l-4.356-3.388l2.078-5.113a1.5 1.5 0 0 0-1.184-2.05l-5.467-.756l-.756-5.467a1.5 1.5 0 0 0-2.05-1.184L28.57 6.936z"></svg:path><svg:path fill="url(#fluentColorAddStarburst481)" fill-opacity=".95" d="M24 14c.69 0 1.25.56 1.25 1.25v7.5h7.5a1.25 1.25 0 1 1 0 2.5h-7.5v7.5a1.25 1.25 0 1 1-2.5 0v-7.5h-7.5a1.25 1.25 0 1 1 0-2.5h7.5v-7.5c0-.69.56-1.25 1.25-1.25"></svg:path><svg:defs><svg:radialgradient id="fluentColorAddStarburst480" cx="0" cy="0" r="1" gradientTransform="rotate(-119.49 41.522 10.903)scale(97.2587 93.1572)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC470"></svg:stop><svg:stop offset=".251" stop-color="#FF835C"></svg:stop><svg:stop offset=".55" stop-color="#F24A9D"></svg:stop><svg:stop offset=".814" stop-color="#B339F0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorAddStarburst481" x1="32.611" x2="11.626" y1="39.646" y2="26.053" gradientUnits="userSpaceOnUse"><svg:stop offset=".024" stop-color="#FFC8D7"></svg:stop><svg:stop offset=".807" stop-color="#fff"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorAddStarburst48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
