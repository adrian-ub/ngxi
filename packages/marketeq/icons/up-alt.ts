import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUpAltIcon],svg[marketeq-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 25v16.667a2.083 2.083 0 0 1-2.083 2.083h-8.334a2.083 2.083 0 0 1-2.083-2.083V25"></svg:path><svg:path stroke="#306CFE" d="m18.75 25l-4.604 3.083a2.083 2.083 0 0 1-2.834-.5L7.48 22.48a2.083 2.083 0 0 1 .396-2.896L23.729 7.25a2.08 2.08 0 0 1 2.542 0l15.854 12.333a2.083 2.083 0 0 1 .396 2.896l-3.834 5.104a2.083 2.083 0 0 1-2.833.5L31.25 25"></svg:path></svg:g>`,
})
export class MarketeqUpAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
