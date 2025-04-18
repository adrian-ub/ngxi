import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqEmailOpenIcon],svg[marketeq-email-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M23.854 30.48a2.08 2.08 0 0 0 2.292 0L37.5 22.916V6.25h-25v16.667z"></svg:path><svg:path stroke="#306CFE" d="m26.146 30.48l14.375-9.647a2.083 2.083 0 0 1 3.229 1.73v19.104a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V22.646a2.084 2.084 0 0 1 3.23-1.813l14.374 9.563a2.08 2.08 0 0 0 2.292.083"></svg:path></svg:g>`,
})
export class MarketeqEmailOpenIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
