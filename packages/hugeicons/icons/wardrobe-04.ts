import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWardrobe04Icon],svg[hugeicons-wardrobe-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20v2m12-2v2M3 16h9m0 4V2M3 14V8c0-2.828 0-4.243.93-5.121S6.358 2 9.353 2h5.294c2.995 0 4.492 0 5.423.879C21 3.757 21 5.172 21 8v6c0 2.828 0 4.243-.93 5.121S17.642 20 14.647 20H9.353c-2.995 0-4.492 0-5.423-.879C3 18.243 3 16.828 3 14m6-4V8m6 4v-2" color="currentColor"></svg:path>`,
})
export class HugeiconsWardrobe04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
