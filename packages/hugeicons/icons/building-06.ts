import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBuilding06Icon],svg[hugeicons-building-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2H6c-2.482 0-3 .518-3 3v17h12V5c0-2.482-.518-3-3-3m6 6h-3v14h6V11c0-2.482-.518-3-3-3M8 6h2M8 9h2m-2 3h2"></svg:path><svg:path d="M11.5 22v-4c0-.943 0-1.414-.293-1.707S10.443 16 9.5 16h-1c-.943 0-1.414 0-1.707.293S6.5 17.057 6.5 18v4"></svg:path></svg:g>`,
})
export class HugeiconsBuilding06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
