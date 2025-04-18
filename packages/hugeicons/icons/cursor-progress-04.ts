import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorProgress04Icon],svg[hugeicons-cursor-progress-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 17a5 5 0 0 0-3.537-3.538M17 17a5 5 0 0 0 1.296-4.834M17 17a5 5 0 0 0 4.834-1.295M17 17a5 5 0 0 0 3.537 3.539M17 17a5 5 0 0 0-1.296 4.834M17 17a5 5 0 0 0-4.834 1.296m1.297-4.834a5.05 5.05 0 0 0-1.297 4.834m1.297-4.834a5.05 5.05 0 0 1 4.833-1.296m0 0a5.01 5.01 0 0 1 3.538 3.539m0 0a5.05 5.05 0 0 1-1.297 4.834m0 0a5.05 5.05 0 0 1-4.832 1.295m0 0a5.01 5.01 0 0 1-3.539-3.538M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorProgress04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
