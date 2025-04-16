import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsShuffleIcon],svg[radix-icons-shuffle-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.354 1.146a.5.5 0 0 0-.708.708L12.793 3H12c-1.296 0-2.289.584-3.128 1.39c-.671.644-1.279 1.467-1.877 2.278q-.197.269-.395.532C5.109 9.188 3.49 11 .5 11a.5.5 0 0 0 0 1c3.51 0 5.391-2.188 6.9-4.2l.42-.565c.597-.808 1.14-1.544 1.745-2.124C10.289 4.416 11.046 4 12 4h.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708zM.5 3c2.853 0 4.63 1.446 6.005 3.067l-.129.176a79 79 0 0 1-.484.65C4.573 5.293 3.026 4 .5 4a.5.5 0 0 1 0-1m8.372 7.61c-.5-.479-.963-1.057-1.414-1.655Q7.74 8.597 8 8.25l.09-.12c.494.664.963 1.268 1.475 1.76c.724.694 1.481 1.11 2.435 1.11h.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L12.793 12H12c-1.296 0-2.289-.584-3.128-1.39" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsShuffleIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
