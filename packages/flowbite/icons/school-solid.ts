import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolSolidIcon],svg[flowbite-school-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m6 10.524l-2.27.638a1 1 0 0 0-.73.963V20a1 1 0 0 0 1 1h2zm12 0l2.27.638a1 1 0 0 1 .73.963V20a1 1 0 0 1-1 1h-2z"></svg:path><svg:path fill-rule="evenodd" d="M12.555 3.168a1 1 0 0 0-1.11 0l-6 4a1 1 0 0 0 1.11 1.664L8 7.869V21h8V7.869l1.445.963A1 1 0 0 0 18 9a.999.999 0 0 0 .555-1.832zM10 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m1-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlowbiteSchoolSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
