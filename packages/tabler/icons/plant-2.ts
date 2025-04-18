import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlant2Icon],svg[tabler-plant-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 9a10 10 0 1 0 20 0"></svg:path><svg:path d="M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10"></svg:path><svg:path d="M12 4a9.7 9.7 0 0 1 2.99 7.5m-5.98 0A9.7 9.7 0 0 1 12 4"></svg:path></svg:g>`,
})
export class TablerPlant2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
