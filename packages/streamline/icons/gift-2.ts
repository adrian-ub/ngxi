import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGift2Icon],svg[streamline-gift-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.276 12.235V6.393H1.724v5.842a1 1 0 0 0 1 1h8.552a1 1 0 0 0 1-1M7 13.234V6.391m6.138-1.599v.6a1 1 0 0 1-1 1H1.862a1 1 0 0 1-1-1v-.6a1 1 0 0 1 1-1h10.276a1 1 0 0 1 1 1M7 3.792C7 2.917 5.98.875 4.448.875c-2.491 0-1.584 2.917-.391 2.917m2.943 0C7 2.917 8.02.875 9.552.875c2.491 0 1.584 2.917.391 2.917"></svg:path>`,
})
export class StreamlineGift2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
