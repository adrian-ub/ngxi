import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsClinicalFOutline24pxIcon],svg[healthicons-clinical-f-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 9V7h2v2h2v2h-2v2H9v-2H7V9zm-2 7h10v-2H7zm10 3H7v-2h10z"></svg:path><svg:path fill-rule="evenodd" d="M14.778 4H18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3.152a2.99 2.99 0 0 1 2.813-2c1.296 0 2.399.834 2.813 2M6 6v14h12V6zm5.965-.751s-.747-.017-.747-.782c0 0 0-.73.747-.73c0 0 .747 0 .747.782c0 0-.017.73-.747.73" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsClinicalFOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
