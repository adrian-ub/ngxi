import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartXIcon],svg[tabler-heart-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12.572L19 13m-6 6l-1 1l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M22 22l-5-5m0 5l5-5"></svg:path>`,
})
export class TablerHeartXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
