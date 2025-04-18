import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowSync2Icon],svg[proicons-arrow-sync-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.915 18.532A7.83 7.83 0 0 1 11.831 3.92h1.043m-1.755-2.17l1.462 1.462a1 1 0 0 1 .293.708m-1.755 2.169l1.462-1.462a1 1 0 0 0 .293-.707m3.211 1.299a7.83 7.83 0 0 1-3.916 14.612h-1.043M12.881 22l-1.462-1.462a1 1 0 0 1-.293-.707m1.755-2.17l-1.462 1.462a1 1 0 0 0-.293.708"></svg:path>`,
})
export class ProiconsArrowSync2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
