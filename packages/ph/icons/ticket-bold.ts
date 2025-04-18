import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTicketBoldIcon],svg[ph-ticket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 108a12 12 0 0 0 12-12V64a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v32a12 12 0 0 0 12 12a20 20 0 0 1 0 40a12 12 0 0 0-12 12v32a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-32a12 12 0 0 0-12-12a20 20 0 0 1 0-40M36 170.34a44 44 0 0 0 0-84.68V68h52v120H36Zm184 0V188H112V68h108v17.66a44 44 0 0 0 0 84.68"></svg:path>`,
})
export class PhTicketBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
