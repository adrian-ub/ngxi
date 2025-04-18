import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowDown04Icon],svg[hugeicons-arrow-down-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.397 18.586l-.76-.967c-1.234-1.565-1.851-2.348-1.57-2.984C8.35 14 9.312 14 11.24 14h1.522c1.927 0 2.89 0 3.172.635c.281.636-.336 1.419-1.57 2.984l-.76.967C12.86 19.529 12.489 20 12 20s-.86-.471-1.603-1.414M12 14V4" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowDown04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
