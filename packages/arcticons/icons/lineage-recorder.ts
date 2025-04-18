import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLineageRecorderIcon],svg[arcticons-lineage-recorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="34.554" cy="24" r="8.945" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.679 24h2.538"></svg:path><svg:rect width="3.31" height="9.606" x="11.396" y="19.197" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.655"></svg:rect><svg:rect width="3.31" height="17.84" x="4.5" y="15.08" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.655"></svg:rect>`,
})
export class ArcticonsLineageRecorderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
