import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCatheonIcon],svg[token-branded-catheon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCatheon0)" d="M10.903 15.375c-.98 0-1.052-.934-.968-1.406l-1.215-.405l-.956 2.205l.58 1.614l2.907 3.145l1.142.337a4.6 4.6 0 0 0 1.013.135c4.697 0 6.204-2.886 6.182-4.421c0-.096-.011-.186-.023-.27c-.466-3.038-2.728-3.184-3.302-3.184a2.87 2.87 0 0 0-1.45.348c-3.207 1.53-3.68 1.902-3.91 1.902"></svg:path><svg:path fill="url(#tokenBrandedCatheon1)" d="M4.406 11.574c0-.495.13-1.238.197-1.547l.534-1.181l.855-1.294l6.182-1.418l.641 3.128a4.3 4.3 0 0 0-1.935-.636c-.73 0-.838.833-.849 1.137v7.74c0 2.07 1.66 3.116 2.531 3.403c-7.706-1.305-8.156-7.763-8.156-9.332"></svg:path><svg:path fill="url(#tokenBrandedCatheon2)" d="M19.594 7.388c0 2.492-2.25 3.487-3.431 3.487c-.99 0-2.965-.911-4.602-1.828C9.92 8.13 8.636 7.5 8.046 7.5c-1.97 0-2.706 1.558-3.454 2.56C6.156 3.754 11.42 3 13.632 3s5.962 1.271 5.962 4.388"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCatheon0" x1="19.579" x2="6.703" y1="10.947" y2="10.947" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CDBF5"></svg:stop><svg:stop offset=".27" stop-color="#377EF2"></svg:stop><svg:stop offset=".71" stop-color="#1E4DA1"></svg:stop><svg:stop offset=".91" stop-color="#04145E"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCatheon1" x1="12.005" x2="12.005" y1="3.001" y2="21.05" gradientUnits="userSpaceOnUse"><svg:stop offset=".11" stop-color="#330665"></svg:stop><svg:stop offset=".5" stop-color="#392388"></svg:stop><svg:stop offset=".71" stop-color="#424BD2"></svg:stop><svg:stop offset=".92" stop-color="#88BFFD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCatheon2" x1="19.594" x2="4.822" y1="7.444" y2="7.36" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C767ED"></svg:stop><svg:stop offset=".15" stop-color="#82018F"></svg:stop><svg:stop offset=".71" stop-color="#FC5E8E"></svg:stop><svg:stop offset="1" stop-color="#F8AAD5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCatheonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
