import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNintendoIcon],svg[hugeicons-nintendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 19.5H8c-2.828 0-4.243 0-5.121-.941C2 17.617 2 16.102 2 13.07v-2.14c0-3.03 0-4.546.879-5.488C3.757 4.5 5.172 4.5 8 4.5h8c2.828 0 4.243 0 5.121.941C22 6.383 22 7.898 22 10.93v2.142c0 3.03 0 4.546-.879 5.488c-.878.941-2.293.941-5.121.941M17 4.5v15M7 4.5v15m12.5-4h-.009m-14.983-7h-.009" color="currentColor"></svg:path>`,
})
export class HugeiconsNintendoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
