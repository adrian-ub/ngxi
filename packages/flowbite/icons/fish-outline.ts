import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFishOutlineIcon],svg[flowbite-fish-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c0 1.6 3.358 4 7.5 4s6.923-3.2 7.5-4c-.577-.8-3.358-4-7.5-4S6 10.4 6 12m0 0L3 9m3 3l-3 3m12.987-3.372h.01M14 8c-1.726 3.302-1.71 5.056 0 8"></svg:path>`,
})
export class FlowbiteFishOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
