import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBluetoothSearchIcon],svg[hugeicons-bluetooth-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.773 11.5c.102-4.413-.284-7.713.379-8.313a.8.8 0 0 1 .215-.14c.87-.398 3.321 1.786 4.925 3.175a.576.576 0 0 1 .023.865c-1.146 1.032-3.483 2.87-5.542 4.413m0 0l-6.262 4.79m6.262-4.79c.102 4.413-.284 7.713.379 8.313a1 1 0 0 0 .215.14c.382.174 1.068-.148 1.853-.683M2.5 6.726l8.915 6.827m8.217 5.606L21.5 21m-.793-4.404a3.6 3.6 0 0 1-3.603 3.597a3.6 3.6 0 0 1-3.604-3.597A3.6 3.6 0 0 1 17.104 13a3.6 3.6 0 0 1 3.603 3.596" color="currentColor"></svg:path>`,
})
export class HugeiconsBluetoothSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
