import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMysltIcon],svg[arcticons-myslt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.878 38.11c5.71-9.788 11.339-16.8 11.339-16.8c.955-1.416 4.548-.247 3.67 2.446a1634 1634 0 0 1-11.339 16.8c-1.481 2.262-5.235-.259-3.67-2.447M7.796 39.166c5.71-9.787 11.34-16.8 11.34-16.8c.955-1.415 4.547-.247 3.669 2.447a1634 1634 0 0 1-11.339 16.8c-1.48 2.261-5.234-.259-3.67-2.447M7.35 22.905c5.71-9.787 11.34-16.8 11.34-16.8c.955-1.415 4.548-.246 3.67 2.447a1634 1634 0 0 1-11.339 16.8c-1.481 2.262-5.235-.259-3.67-2.447"></svg:path><svg:circle cx="27.137" cy="27.244" r="2.692" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMysltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
