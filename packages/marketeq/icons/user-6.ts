import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUser6Icon],svg[marketeq-user-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M22.917 27.083h4.166a14.583 14.583 0 0 1 14.584 14.584a2.083 2.083 0 0 1-2.084 2.083H10.417a2.083 2.083 0 0 1-2.084-2.083a14.583 14.583 0 0 1 14.584-14.584"></svg:path><svg:path stroke="#306CFE" d="M25 27.083c5.753 0 10.417-4.663 10.417-10.416S30.753 6.25 25 6.25s-10.417 4.664-10.417 10.417S19.247 27.083 25 27.083"></svg:path></svg:g>`,
})
export class MarketeqUser6Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
