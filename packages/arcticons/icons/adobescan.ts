import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobescanIcon],svg[arcticons-adobescan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Zm-1.89 26.43l-3.6.7v4.31L24 34.79l-11 2.15v-4.31l-3.6-.7V16.07l3.6-.7v-4.31l11 2.15l11-2.15v4.31l3.6.7ZM24 13.21l11.01 2.16m-22.02 0v17.26M24 34.79l11.01-2.16"></svg:path><svg:circle cx="24" cy="24" r="7.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="5.07" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsAdobescanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
