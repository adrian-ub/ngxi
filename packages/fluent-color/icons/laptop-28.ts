import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorLaptop28Icon],svg[fluent-color-laptop-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorLaptop280)" d="M6.754 19L14 18.5l7.254.5h.565a1 1 0 0 1 .35.064l3.126 1.172c.423.158.704.562.705 1.014H2c0-.451.28-.855.702-1.013l3.128-1.173A1 1 0 0 1 6.181 19z"></svg:path><svg:path fill="url(#fluentColorLaptop281)" d="M2.004 21.25a.75.75 0 0 1 .75-.75H25.25a.75.75 0 0 1 0 1.5H2.755a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="url(#fluentColorLaptop282)" d="M4.004 7.75A2.75 2.75 0 0 1 6.754 5h14.5a2.75 2.75 0 0 1 2.75 2.75v8.5a2.75 2.75 0 0 1-2.75 2.75h-14.5a2.75 2.75 0 0 1-2.75-2.75z"></svg:path><svg:defs><svg:lineargradient id="fluentColorLaptop280" x1="26" x2="24.983" y1="21.905" y2="15.251" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#63686E"></svg:stop><svg:stop offset="1" stop-color="#889096"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop281" x1="26" x2="25.827" y1="21.893" y2="19.118" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#AAB3BD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorLaptop282" x1="18.004" x2="18.821" y1="5" y2="21.015" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorLaptop28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
