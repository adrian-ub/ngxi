import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsNote8thSimple16Icon],svg[qlementine-icons-note-8th-simple-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.9 1.28a.5.5 0 0 1 .053.236v1.98a.5.5 0 0 1-.106.318a.5.5 0 0 1-.283.18l-2.85.713a1 1 0 0 0-.757.97v6.48c0 1.29-.73 2.27-2.7 2.74s-3.3-.61-3.3-2.13s1.54-2.75 3.17-2.75c.715 0 1.35.17 1.83.467v-7.19c0-.688.467-1.29 1.13-1.45l3.23-.81a.5.5 0 0 1 .58.256z"></svg:path>`,
})
export class QlementineIconsNote8thSimple16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
