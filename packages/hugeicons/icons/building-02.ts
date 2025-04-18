import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBuilding02Icon],svg[hugeicons-building-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 2H9c-3.31 0-4 .69-4 4v16h14V6c0-3.31-.69-4-4-4M3 22h18"></svg:path><svg:path d="M15 22v-3c0-1.655-.345-2-2-2h-2c-1.655 0-2 .345-2 2v3m4.5-16h-3m3 3.5h-3m3 3.5h-3"></svg:path></svg:g>`,
})
export class HugeiconsBuilding02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
