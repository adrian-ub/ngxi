import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAminoIcon],svg[arcticons-amino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.762 8.247L4.877 42.512h7.307c3.48-5.334 9.874-10.106 15.422-11.83c.784.206 4.415 11.83 4.415 11.83h6.905l-5.575-15.035l7.597-2.852v-5.168l-9.931 2.66l-6.21-13.87c-1.563-3.684-4.688-3.609-6.045 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.642 29.655c2.716-1.802 5.44-3.587 8.541-4.616l-3.285-6.67c-1.85 3.904-3.525 7.59-5.256 11.286"></svg:path>`,
})
export class ArcticonsAminoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
