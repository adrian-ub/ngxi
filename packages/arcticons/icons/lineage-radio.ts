import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineageRadioIcon],svg[arcticons-lineage-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="26" x="4.5" y="12.238" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.622"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.721 12.238V9.762"></svg:path><svg:circle cx="17.108" cy="25.238" r="9.741" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.53 15.896a9.744 9.744 0 0 1-.69 18.86l-2.08-6.335a3.184 3.184 0 0 0 .341-6.35Zm-.218 11.239l5.576 3.469"></svg:path>`,
})
export class ArcticonsLineageRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
