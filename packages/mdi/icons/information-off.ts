import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInformationOffIcon],svg[mdi-information-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l3 3C2.8 7.6 2 9.7 2 12c0 5.5 4.5 10 10 10c2.3 0 4.4-.8 6-2.1l2.8 2.8zM13 17h-2v-4.1l2 2zm-2-9.2L6.7 3.5C8.3 2.6 10.1 2 12 2c5.5 0 10 4.5 10 10c0 1.9-.6 3.7-1.5 5.3L12.2 9h.8V7h-2z"></svg:path>`,
})
export class MdiInformationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
