import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRadioactive2Icon],svg[streamline-radioactive-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 10.99a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path><svg:path d="M9.35 1.31a3.32 3.32 0 1 1-4.7 0"></svg:path><svg:path d="M.5 8.5a3.32 3.32 0 1 1 2.35 4.07"></svg:path><svg:path d="M11.15 12.57A3.32 3.32 0 1 1 13.5 8.5"></svg:path></svg:g>`,
})
export class StreamlineRadioactive2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
