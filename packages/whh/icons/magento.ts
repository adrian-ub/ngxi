import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMagentoIcon],svg[whh-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 841V320L448 160L128 320v521L0 768V256L448 0l449 256v512zm-384 18l64 37l64-37V325l129 75v512l-193 112l-192-112V400l128-75z"></svg:path>`,
})
export class WhhMagentoIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
