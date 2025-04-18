import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTimezoneIcon],svg[tabler-timezone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.884 10.554a9 9 0 1 0-10.337 10.328M3.6 9h16.8M3.6 15h6.9"></svg:path><svg:path d="M11.5 3a17 17 0 0 0-1.502 14.954M12.5 3a17 17 0 0 1 2.52 7.603M14 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0"></svg:path><svg:path d="M18 16.5V18l.5.5"></svg:path></svg:g>`,
})
export class TablerTimezoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
