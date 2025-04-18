import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMarcoPoloIcon],svg[arcticons-marco-polo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="31.63" cy="18.675" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.758" ry="4.931"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.449 30.336c4.987-4.623 14.033-9.197 23.469-11.014M10.447 7.31c8.245.387 14.069 3.993 17.845 7.769m3.878-1.295c.287-5.305-.255-7.082-1.178-10.121m12.712 11.721c-.988-.16-4.337-.495-7.817 1.054m6.833 18.145c-.88-5.955-4.434-10.583-7.24-12.905m-5.145 1.742c-1.621 10.604-5.165 17.346-8.655 21.956"></svg:path>`,
})
export class ArcticonsMarcoPoloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
