import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeNeutral2Icon],svg[icomoon-free-neutral2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m2 12H6v-1h4zm1-8a1 1 0 1 1 0 2a1 1 0 0 1 0-2M5 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class IcomoonFreeNeutral2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
