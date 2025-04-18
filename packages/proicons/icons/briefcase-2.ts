import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBriefcase2Icon],svg[proicons-briefcase-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 10.5A2.5 2.5 0 0 1 6.25 8h11.5a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5H6.25a2.5 2.5 0 0 1-2.5-2.5zm4.853-5a1.5 1.5 0 0 1 1.5-1.5h3.794a1.5 1.5 0 0 1 1.5 1.5V8H8.603z"></svg:path>`,
})
export class ProiconsBriefcase2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
