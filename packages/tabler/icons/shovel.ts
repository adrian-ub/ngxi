import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerShovelIcon],svg[tabler-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 4l3 3m-1.5-1.5l-8 8m-2.224-2.216l4.44 4.44a.97.97 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1-5.809-5.81l2.704-2.703a.97.97 0 0 1 1.37 0z"></svg:path>`,
})
export class TablerShovelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
