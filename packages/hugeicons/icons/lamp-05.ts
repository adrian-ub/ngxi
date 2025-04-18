import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLamp05Icon],svg[hugeicons-lamp-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.998 14c-1.025.876-.802 2.448-.227 3.487c.6 1.083.952 2.312.57 3.472c-.203.617-.836 1.041-1.554 1.041h-3.562c-.704 0-1.327-.407-1.54-1.008c-.42-1.177-.072-2.437.53-3.548c.55-1.017.78-2.564-.172-3.444M8.5 14h7m-.906-4H9.406c-1.896 0-2.844 0-3.245-.548c-.402-.549-.013-1.312.765-2.837l1.391-2.728c.467-.916.701-1.374 1.15-1.63C9.918 2 10.488 2 11.626 2h.75c1.139 0 1.708 0 2.157.256c.45.257.684.715 1.15 1.63l1.392 2.73c.778 1.524 1.167 2.287.765 2.836c-.401.548-1.35.548-3.245.548M12 10v4m-3 5h6" color="currentColor"></svg:path>`,
})
export class HugeiconsLamp05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
