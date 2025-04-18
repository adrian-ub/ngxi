import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalVaultIcon],svg[devicon-original-vault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffd814" d="m0 1.953l63.76 124.094L128 1.953Zm53.841 49.254H43.684V41.06H53.84zm0-15.227H43.684V25.822H53.84ZM69.08 66.444H58.97V56.286h10.108zm0-15.237H58.97V41.06h10.108zm0-15.227H58.97V25.822h10.108Zm15.147 15.227h-10.2V41.06h10.159Zm-10.2-15.227V25.822h10.159V35.98z"></svg:path>`,
})
export class DeviconOriginalVaultIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
