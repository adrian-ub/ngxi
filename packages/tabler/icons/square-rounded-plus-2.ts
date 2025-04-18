import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareRoundedPlus2Icon],svg[tabler-square-rounded-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.54 20.996q-.264.005-.54.004c-7.2 0-9-1.8-9-9s1.8-9 9-9s9 1.8 9 9q0 .277-.004.544M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerSquareRoundedPlus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
