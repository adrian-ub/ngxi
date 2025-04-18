import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsCogIcon],svg[gridicons-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12c0-.568-.061-1.122-.174-1.656l1.834-1.612l-2-3.464l-2.322.786a8 8 0 0 0-2.859-1.657L14 2h-4l-.479 2.396a8 8 0 0 0-2.859 1.657L4.34 5.268l-2 3.464l1.834 1.612a8 8 0 0 0 0 3.312L2.34 15.268l2 3.464l2.322-.786a8 8 0 0 0 2.859 1.657L10 22h4l.479-2.396a8 8 0 0 0 2.859-1.657l2.322.786l2-3.464l-1.834-1.612A8 8 0 0 0 20 12m-8 4a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class GridiconsCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
