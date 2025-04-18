import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPuzzleIcon],svg[hugeicons-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.828 6.001a3 3 0 1 0-5.658 0c-2.285.008-3.504.09-4.292.878S2.008 8.886 2 11.17a3 3 0 1 1 0 5.66c.008 2.284.09 3.503.878 4.291s2.007.87 4.291.878a3 3 0 1 1 5.66 0c2.284-.008 3.503-.09 4.291-.878s.87-2.007.878-4.292a3 3 0 1 0 0-5.658c-.008-2.285-.09-3.504-.878-4.292c-.788-.789-2.007-.87-4.292-.878" color="currentColor"></svg:path>`,
})
export class HugeiconsPuzzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
