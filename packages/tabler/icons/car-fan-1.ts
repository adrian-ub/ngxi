import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCarFan1Icon],svg[tabler-car-fan-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12V3l4.912 1.914a1.7 1.7 0 0 1 .428 2.925zm2.424 3.03L12 12h6m-6 0H3l1.914-4.912a1.7 1.7 0 0 1 2.925-.428zm0 0v9l-4.912-1.914a1.7 1.7 0 0 1-.428-2.925zm6 5l2-2v6"></svg:path>`,
})
export class TablerCarFan1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
