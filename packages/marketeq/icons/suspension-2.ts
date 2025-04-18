import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSuspension2Icon],svg[marketeq-suspension-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M20.833 39.583a4.166 4.166 0 1 1 8.332 0a4.166 4.166 0 0 1-8.332 0M25 10.417v25zm-2.083 0h4.166V6.25h-4.166z"></svg:path><svg:path stroke="#344054" d="m20.833 15.625l8.334 2.083m-8.334 4.167l8.334 2.083zm0 6.25l8.334 2.083z"></svg:path></svg:g>`,
})
export class MarketeqSuspension2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
