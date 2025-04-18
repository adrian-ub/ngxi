import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRotate2Icon],svg[tabler-rotate-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01m3.84-1.58v.01m2.53-3.28v.01m.57-4.11v.01"></svg:path>`,
})
export class TablerRotate2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
