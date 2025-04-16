import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsRotateCounterClockwiseIcon],svg[radix-icons-rotate-counter-clockwise-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.597 2.936A.25.25 0 0 0 8 2.74V2c1.981 0 3.185.364 3.91 1.09C12.637 3.814 13 5.018 13 7a.5.5 0 0 0 1 0c0-2.056-.367-3.603-1.382-4.618C11.603 1.368 10.056 1 8 1V.261a.25.25 0 0 0-.403-.197L6.004 1.303a.25.25 0 0 0 0 .394zM9.5 5h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5m-7-1A1.5 1.5 0 0 0 1 5.5v7A1.5 1.5 0 0 0 2.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 9.5 4z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsRotateCounterClockwiseIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
