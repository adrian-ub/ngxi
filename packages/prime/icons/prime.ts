import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primePrimeIcon],svg[prime-prime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.36 11.33l-1.1-.25l.86 1.22v3.79l2.93-2.44V9.5l-1.35.48zm-6.84 0L7.17 9.98L5.83 9.5v4.15l2.93 2.44V12.3l.86-1.22z"></svg:path><svg:path fill="currentColor" d="M13.16 11.45h-2.44l-.61-.37l-.98 1.47v5.5l.73 1.09l.86.86h2.44l.86-.86l.73-1.09v-5.5l-.98-1.47zm1.96 6.96l1.58-1.59v-1.58l-1.58 1.34zm-7.95-1.59l1.59 1.59v-1.83l-1.59-1.34zm3.91-5.86h.62V4h-1.35l-.97 2.31l-4.41-.36l.74 3.06l5.25 1.95zm3.42-4.65L13.53 4h-1.35v7H13l5.25-2L19 6Z"></svg:path><svg:path fill="currentColor" d="M17.32 5.71L15.6 4h-1.71l.86 1.95zM9.98 4H8.27L6.56 5.71l2.57.24z"></svg:path>`,
})
export class PrimePrimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
