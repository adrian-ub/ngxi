import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorProgress03Icon],svg[hugeicons-cursor-progress-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466m14.186 10.577a4.8 4.8 0 0 1 1.278 0m2.266.936c.337.258.652.573.91.91m.937 2.267c.056.423.056.852 0 1.276m-7.521-4.246c-1.936 1.834-1.864 4.698-.093 6.469c1.79 1.79 4.703 1.848 6.531-.156" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorProgress03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
