import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorMlnIcon],svg[cryptocurrency-color-mln-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#0B1529"></svg:circle><svg:path fill="#FFF" d="m8.627 20.124l5.272 3.092v1.729L7 20.885v-10.59L16 5l9 5.295v10.59l-6.899 4.06v-1.73l5.271-3.091l-1.36-.786l.178-.309l1.343.776v-7.852l-6.82 4.042v11.56L16 28l-.714-.445v-11.56l-6.819-4.042v7.851l1.342-.775l.178.31zm7.175-13.31L9.18 10.699L16 14.742l6.82-4.043l-6.661-3.908v1.604h-.357zm0 2.592h.357v1.657h-.357zm0 2.668h.357v1.657l-.179.081l-.178-.08zm5.56 6.45l-.178.31l-1.436-.83l.179-.309zm-2.265-1.334l-.179.31l-1.435-.83l.02-.194l.158-.114zm-8.46 1.334l1.435-.829l.179.31l-1.435.828zm2.266-1.334l1.435-.828l.16.114l.018.195l-1.435.828z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorMlnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
