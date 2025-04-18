import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorSavings16Icon],svg[fluent-color-savings-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorSavings160)" d="M15 8.268c0 1.552-.548 2.64-1.11 3.34a4.6 4.6 0 0 1-.89.85V13.5a1.5 1.5 0 0 1-1.5 1.5H11a1 1 0 0 1-1-1H8a1 1 0 0 1-1 1h-.5A1.5 1.5 0 0 1 5 13.5v-.214c-1.363-.433-2.312-1.534-2.78-2.858a.43.43 0 0 0-.269-.281A1.31 1.31 0 0 1 1 8.89v-.794c0-.576.382-1.082.935-1.24c.104-.03.216-.13.271-.297c.346-1.046 1.069-1.81 2-2.37q.145-.088.26-.15V2.163a.76.76 0 0 1 .481-.704a.77.77 0 0 1 .826.15c.253.24.585.525.94.758c.365.238.707.39.986.418h.005C11.077 2.784 15 4.471 15 8.268"></svg:path><svg:path fill="url(#fluentColorSavings161)" d="M5.5 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill="#9F1459" d="M6.942 4.727a.835.835 0 0 1 1.09-.453l5.56 2.295a.835.835 0 0 1-.637 1.544l-5.56-2.296a.835.835 0 0 1-.453-1.09"></svg:path><svg:path fill="url(#fluentColorSavings162)" d="M12.14 7.776a3 3 0 1 0-3.906-1.613z"></svg:path><svg:path fill="url(#fluentColorSavings163)" fill-opacity=".8" d="M12.14 7.776a3 3 0 1 0-3.906-1.613z"></svg:path><svg:defs><svg:radialgradient id="fluentColorSavings160" cx="0" cy="0" r="1" gradientTransform="matrix(3.63124 12.79178 -13.17677 3.74053 5.287 2.736)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".581" stop-color="#E869CE"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorSavings161" cx="0" cy="0" r="1" gradientTransform="rotate(59.532 -3.375 7.091)scale(1.27093)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B91D6B"></svg:stop><svg:stop offset="1" stop-color="#670938"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorSavings162" x1="12.968" x2="8.03" y1="7.63" y2="3.794" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF8A69"></svg:stop><svg:stop offset="1" stop-color="#FFCD0F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorSavings163" x1="11.795" x2="9.488" y1="2.361" y2="7.421" gradientUnits="userSpaceOnUse"><svg:stop offset=".67" stop-color="#FB5937" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#CD3E1D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorSavings16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
