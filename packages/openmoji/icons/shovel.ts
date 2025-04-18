import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShovelIcon],svg[openmoji-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9b9b9a" d="M13.802 58.198c6.252 3.251 13.295.959 17.984-3.73l1.897-1.896c.828-.83.791-2.21-.084-3.085l-5.543-5.543l-5.543-5.543c-.875-.875-2.256-.912-3.085-.084l-1.896 1.897c-4.689 4.689-6.981 11.732-3.73 17.984"></svg:path><svg:path fill="#d0cfce" d="M22.513 43.706c-.875-.875-2.256-.912-3.085-.084l-1.896 1.897c-2.524 2.524-4.3 8.104-3.73 12.68c6.252 3.25 13.295.958 17.984-3.731l.745-.744l-4.475-4.475z"></svg:path><svg:path fill="#a57939" d="m26.287 42.177l19.738-19.738l3.536 3.536l-19.738 19.738zm24.335-29.991l9.192 9.192l-3.536 3.536l-9.192-9.192z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.802 58.198c-3.251-6.251-.959-13.295 3.73-17.984l1.896-1.897c.83-.828 2.21-.791 3.085.084l5.543 5.543"></svg:path><svg:path d="M13.802 58.198c6.252 3.251 13.295.959 17.984-3.73l1.897-1.896c.828-.83.791-2.21-.084-3.085l-5.543-5.543m22.566-31.758l9.192 9.192l-3.536 3.536l-9.192-9.192z"></svg:path><svg:path d="m56.279 24.914l-1.061 1.06a4 4 0 0 1-5.657 0l-3.536-3.535a4 4 0 0 1 0-5.657l1.061-1.06M26.287 42.177l19.738-19.738l3.536 3.536l-19.738 19.738z"></svg:path></svg:g>`,
})
export class OpenmojiShovelIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
