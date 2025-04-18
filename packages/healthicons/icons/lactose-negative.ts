import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLactoseNegativeIcon],svg[healthicons-lactose-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsLactoseNegative0)"><svg:path d="M22 24.615a1 1 0 1 0-2 0v14.77a1 1 0 0 0 2 0zm5-1a1 1 0 0 1 1 1v14.77a1 1 0 1 1-2 0v-14.77a1 1 0 0 1 1-1M21 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM19.584 20a3 3 0 0 0-2.992 2.776l-1.35 18A3 3 0 0 0 18.234 44h11.533a3 3 0 0 0 2.991-3.224l-1.35-18A3 3 0 0 0 28.417 20zM24 10a6 6 0 0 0-6 6v.857c0 .631.512 1.143 1.143 1.143h9.714c.631 0 1.143-.512 1.143-1.143V16a6 6 0 0 0-6-6m6-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsLactoseNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsLactoseNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
