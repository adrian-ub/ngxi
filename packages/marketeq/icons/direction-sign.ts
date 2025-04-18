import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDirectionSignIcon],svg[marketeq-direction-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m43.23 17.354l-1.876-2.083a2.08 2.08 0 0 0-1.541-.688H29.167v8.334h10.645a2.08 2.08 0 0 0 1.542-.688l1.875-2.083a2.083 2.083 0 0 0 0-2.792M6.77 24.313l1.876 2.083a2.08 2.08 0 0 0 1.541.687h10.646V18.75H10.188a2.08 2.08 0 0 0-1.542.688L6.77 21.52a2.083 2.083 0 0 0 0 2.791"></svg:path><svg:path stroke="#306CFE" d="M16.667 43.75h16.666m-4.166 0h-8.334V8.333a2.083 2.083 0 0 1 2.084-2.083h4.166a2.083 2.083 0 0 1 2.084 2.083z"></svg:path></svg:g>`,
})
export class MarketeqDirectionSignIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
