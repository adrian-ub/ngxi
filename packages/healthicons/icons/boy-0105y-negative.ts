import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBoy0105yNegativeIcon],svg[healthicons-boy-0105y-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBoy0105yNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM28 13a4 4 0 1 1-8 0a4 4 0 0 1 8 0m6.004 8.423a2 2 0 1 0-1.008-3.87c-3.613.94-6.326 1.36-8.988 1.349c-2.668-.01-5.389-.454-9.027-1.356a2 2 0 1 0-.962 3.883c1.793.444 3.426.796 4.981 1.044v6.403l-.985 7.876a2 2 0 0 0 3.925.733l2-8Q24 29.244 24 29q0 .244.06.485l2 8a2 2 0 0 0 3.925-.733L29 28.875v-6.376c1.56-.247 3.2-.606 5.004-1.076" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBoy0105yNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBoy0105yNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
