import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobeIllustratorDrawIcon],svg[arcticons-adobe-illustrator-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11 13.066l13 21.868l13-21.868"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.773 13.066c0 2.495-1.71 4.793-3.688 6.468l5.06 9.586l.855-.945l.855.945l5.06-9.586c-1.977-1.675-3.688-3.973-3.688-6.468z"></svg:path><svg:circle cx="24" cy="21.093" r="1.791" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 28.175v-5.291"></svg:path>`,
})
export class ArcticonsAdobeIllustratorDrawIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
