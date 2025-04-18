import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPresentation04Icon],svg[hugeicons-presentation-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 11.5c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h7c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121v-2c0-2.828 0-4.243-.879-5.121C19.743 3.5 18.328 3.5 15.5 3.5h-7c-2.828 0-4.243 0-5.121.879C2.5 5.257 2.5 6.672 2.5 9.5zM12 2v1.5M7 22l5-3l5 3m-5-4.222V22" color="currentColor"></svg:path>`,
})
export class HugeiconsPresentation04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
