import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBankIcon],svg[mynaui-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.94V18m5-9.06V18M7 8.94V18m5.447-14.894l7.764 3.908c.944.475.608 1.907-.447 1.907H4.236c-1.055 0-1.391-1.432-.447-1.907l7.764-3.908a1 1 0 0 1 .894 0M19.5 21h-15a1.5 1.5 0 0 1 0-3h15a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class MynauiBankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
