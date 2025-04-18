import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareRoundedMinus2Icon],svg[tabler-square-rounded-minus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 21c-.18.002-.314 0-.5 0c-7.2 0-9-1.8-9-9s1.8-9 9-9s9 1.8 9 9c0 1.136-.046 2.138-.152 3.02M16 19h6"></svg:path>`,
})
export class TablerSquareRoundedMinus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
