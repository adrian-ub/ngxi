import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBone01Icon],svg[hugeicons-bone-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.4 5.838a2.68 2.68 0 0 1 1.524-.762m0 0a2.695 2.695 0 1 1-.847 5.068c-.413-.213-.944-.228-1.273.1l-6.56 6.56c-.328.33-.313.86-.1 1.274a2.696 2.696 0 1 1-5.068.846M18.924 5.076a2.695 2.695 0 1 0-5.067.847c.212.413.227.944-.101 1.273l-6.56 6.56c-.33.328-.86.313-1.274.1a2.696 2.696 0 1 0-.846 5.068m1.524-.762a2.7 2.7 0 0 1-1.524.762" color="currentColor"></svg:path>`,
})
export class HugeiconsBone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
