import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosApiaryIcon],svg[logos-apiary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosApiary0" x1="100.012%" x2="0%" y1="49.991%" y2="49.991%"><svg:stop offset="0%" stop-color="#37BDA6"></svg:stop><svg:stop offset="100%" stop-color="#8AD3B8"></svg:stop></svg:lineargradient><svg:lineargradient id="logosApiary1" x1="100.012%" x2="0%" y1="49.998%" y2="49.998%"><svg:stop offset="50%" stop-color="#4BB6AD"></svg:stop><svg:stop offset="100%" stop-color="#78BBC1"></svg:stop></svg:lineargradient><svg:lineargradient id="logosApiary2" x1="-.018%" x2="100.023%" y1="49.998%" y2="49.998%"><svg:stop offset="0%" stop-color="#4379A7"></svg:stop><svg:stop offset="100%" stop-color="#7CC9B8"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#13A049" d="M127.693 36.867v73.58l63.847-36.866V0z" opacity=".5"></svg:path><svg:path fill="#A2CC39" d="M127.693 36.867L63.847 0v73.734l63.846 36.867z" opacity=".5"></svg:path><svg:path fill="url(#logosApiary0)" d="m191.54 0l-63.847 36.867L63.847 0L0 36.867l127.693 73.734L255.31 36.867z" opacity=".9"></svg:path><svg:path fill="url(#logosApiary1)" d="M127.693 110.601L0 36.867v73.734l63.847 36.867v73.658l63.846 36.867l63.847-36.867v-73.658l63.77-36.867V36.867z"></svg:path><svg:path fill="url(#logosApiary2)" d="M127.693 110.601v147.392l63.847-36.867v-73.658l63.77-36.867V36.867z"></svg:path><svg:path fill="#231F20" d="M127.693 184.259v73.734l63.847-36.867z" opacity=".05"></svg:path><svg:path fill="#231F20" d="M127.693 258.146v-73.734l-63.846 36.867z" opacity=".1"></svg:path><svg:path fill="#231F20" d="M63.847 73.734L0 110.601l63.847 36.867l63.846-36.867z" opacity=".05"></svg:path><svg:path fill="#231F20" d="m191.54 73.734l-63.847 36.867l63.847 36.867l63.77-36.867z" opacity=".05"></svg:path>`,
})
export class LogosApiaryIcon {
  readonly viewBox = input("0 0 256 259")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
