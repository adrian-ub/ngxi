import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSfundIcon],svg[token-branded-sfund-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSfund0)" d="m9.096 6.387l3.126-3.34l.128 2.108c-.464.483-1.966 1.895-3.69 4.16c-1.535 2.012-.062 4.58 1.061 5.503v1.871c-.734-.398-2.07-.933-3.05-3.353c-1.213-2.984.956-5.249 2.425-6.95"></svg:path><svg:path fill="url(#tokenBrandedSfund1)" d="M14.983 17.456L11.847 20.8l-.123-2.108c.464-.488 1.848-1.999 3.695-4.159c1.516-1.781 0-4.666-1.061-5.267V7.414c.73.397 1.96.776 2.946 3.197c1.208 2.984-.71 5.485-2.321 6.845"></svg:path><svg:path fill="url(#tokenBrandedSfund2)" d="M11.758 21c-1.469-1.355-3.68-5.04-.806-8.962l1.1-1.445c.61-.824 1.373-3.102.023-4.969c-.166-.227-1.274-1-2.094-.19l-.104.12l.104-.115L12.193 3c1.502 1.336 3.828 4.917 1.123 8.56l-1.421 1.837c-.516.735-1.246 2.795 0 5.192c.289.436 1.421.673 2.364-.379z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSfund0" x1="11.991" x2="11.991" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#986EF8"></svg:stop><svg:stop offset="1" stop-color="#4592E6"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSfund1" x1="11.999" x2="11.999" y1="20.999" y2="2.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3CD7FE"></svg:stop><svg:stop offset="1" stop-color="#8651E7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSfund2" x1="12.056" x2="12.056" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#45CFFB"></svg:stop><svg:stop offset="1" stop-color="#9E68FC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSfundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
