import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsStarFilled16Icon],svg[qlementine-icons-star-filled-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.56.767a.493.493 0 0 1 .876 0l2.1 4.16a.49.49 0 0 0 .366.261l4.68.68c.4.058.559.54.271.818l-3.38 3.25a.48.48 0 0 0-.14.423l.786 4.58c.067.392-.35.69-.708.506l-4.19-2.15a.5.5 0 0 0-.453 0l-4.19 2.15c-.358.184-.776-.114-.708-.506l.786-4.58a.48.48 0 0 0-.14-.423l-3.38-3.25a.478.478 0 0 1 .271-.818l4.68-.68a.49.49 0 0 0 .366-.261l2.1-4.16z"></svg:path>`,
})
export class QlementineIconsStarFilled16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
