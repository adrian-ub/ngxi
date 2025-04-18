import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneSolidIcon],svg[streamline-phone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.17 13.24a3.32 3.32 0 0 1-4.161-.457l-.468-.458a1.123 1.123 0 0 1 0-1.57l1.986-1.966a1.113 1.113 0 0 1 1.56 0a1.123 1.123 0 0 0 1.571 0l3.12-3.12a1.103 1.103 0 0 0 0-1.571a1.113 1.113 0 0 1 0-1.56L10.756.56a1.123 1.123 0 0 1 1.57 0l.458.468a3.32 3.32 0 0 1 .458 4.16A30.1 30.1 0 0 1 5.17 13.24"></svg:path>`,
})
export class StreamlinePhoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
