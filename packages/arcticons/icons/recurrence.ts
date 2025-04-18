import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRecurrenceIcon],svg[arcticons-recurrence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.21 7.47a1.73 1.73 0 0 0-1.74 1.74v7.14h33.06V9.21a1.73 1.73 0 0 0-1.74-1.74ZM7.47 31.65v7.14a1.73 1.73 0 0 0 1.74 1.74h29.58a1.73 1.73 0 0 0 1.74-1.74v-7.14Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.22 16.35a1.72 1.72 0 0 0-1.72 1.73v11.84a1.72 1.72 0 0 0 1.72 1.73h35.56a1.72 1.72 0 0 0 1.72-1.73V18.08a1.72 1.72 0 0 0-1.72-1.73Zm5.11 3.07A4.58 4.58 0 0 1 15.91 24h0a4.58 4.58 0 0 1-4.58 4.58h0A4.58 4.58 0 0 1 6.75 24h0a4.58 4.58 0 0 1 4.58-4.58m7.82 6.89h17.39m-17.39-4.62h21.73"></svg:path>`,
})
export class ArcticonsRecurrenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
