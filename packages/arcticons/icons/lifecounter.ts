import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLifecounterIcon],svg[arcticons-lifecounter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.084 38.461a4.694 4.694 0 0 1-4.693 4.694h0a4.694 4.694 0 0 1-4.694-4.694h0a4.694 4.694 0 0 1 4.694-4.693h0a4.694 4.694 0 0 1 4.693 4.693m-18.783 0a4.694 4.694 0 0 1-4.693 4.694h0a4.694 4.694 0 1 1 4.693-4.694m9.392-28.922a4.694 4.694 0 0 1-4.694 4.693h0a4.694 4.694 0 0 1-4.693-4.693h0a4.694 4.694 0 0 1 4.693-4.694h0a4.694 4.694 0 0 1 4.694 4.694M44 20.551a4.694 4.694 0 0 1-4.693 4.694h0a4.694 4.694 0 0 1-4.694-4.694h0a4.694 4.694 0 0 1 4.694-4.693h0A4.694 4.694 0 0 1 44 20.55m-30.613.001a4.694 4.694 0 1 1-9.387 0a4.694 4.694 0 0 1 9.387 0"></svg:path>`,
})
export class ArcticonsLifecounterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
