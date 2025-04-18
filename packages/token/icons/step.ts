import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenStepIcon],svg[token-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.994 16.498v-8.99l-7.995-4.5v8.994L4.005 16.5l7.997 4.5l7.987-4.495l.005.003v-.005l.003-.002z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.004 3L20 7.499l-2.5 1.624l-8-4.706z"></svg:path><svg:path fill="currentColor" d="M17.5 8.871v3.043l-8-4.536V4.412z"></svg:path><svg:path fill="currentColor" d="m9.498 7.378l8.002 4.524l-3 1.692l-7.998-4.528z"></svg:path><svg:path fill="currentColor" d="M14.498 13.593v3.027L6.5 11.95V9.06z"></svg:path><svg:path fill="currentColor" d="m6.5 11.949l8 4.631L12 18l-8-4.5z"></svg:path><svg:path fill="currentColor" d="M12 18v3l-8-4.503v-3zm5.502-9.115L20 7.518v8.998l-2.498 1.388zm-3.004 4.709l3.001-1.698v6.01l-3.002 1.676z"></svg:path><svg:path fill="currentColor" d="m12 17.999l2.497-1.422V19.6L11.999 21z"></svg:path>`,
})
export class TokenStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
