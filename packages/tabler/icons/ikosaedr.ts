import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIkosaedrIcon],svg[tabler-ikosaedr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 8.007v7.986a2 2 0 0 1-1.006 1.735l-7 4.007a2 2 0 0 1-1.988 0l-7-4.007A2 2 0 0 1 3 15.993V8.007a2 2 0 0 1 1.006-1.735l7-4.007a2 2 0 0 1 1.988 0l7 4.007A2 2 0 0 1 21 8.007M3.29 6.97L7.5 9m13.21-2.03L16.5 9m4.2 8H3.3"></svg:path><svg:path d="M11.76 2.03L7.5 9l-4.3 7.84m9.04-14.81Q15.037 6.47 16.5 9t4.3 7.84"></svg:path><svg:path d="M12 17L7.5 9h9zm0 0v5"></svg:path></svg:g>`,
})
export class TablerIkosaedrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
