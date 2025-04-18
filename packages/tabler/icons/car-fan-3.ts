import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarFan3Icon],svg[tabler-car-fan-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zm2.044 2.624L12 12h4m-4 0H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zm0 0v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925zm6 3.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3H19h.5a1.5 1.5 0 0 1 0 3h-1a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class TablerCarFan3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
