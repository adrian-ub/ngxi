import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsQuestionNegativeIcon],svg[healthicons-question-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsQuestionNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM33.495 7.645c2.473 2.11 4.005 5.226 4.005 9.2c0 4.662-2.522 7.765-5.438 9.626c-1.96 1.25-4.151 1.99-6.062 2.378v2.15a2.5 2.5 0 1 1-5 0v-4.321a2.5 2.5 0 0 1 2.326-2.494c1.658-.116 4.1-.687 6.046-1.928c1.856-1.185 3.128-2.862 3.128-5.411c0-2.581-.943-4.28-2.25-5.397c-1.372-1.17-3.337-1.853-5.523-1.939c-4.628-.181-8.565 2.193-9.287 5.423a2.5 2.5 0 1 1-4.88-1.091c1.478-6.603 8.54-9.556 14.363-9.328c3.039.12 6.162 1.075 8.572 3.132M20 40a4 4 0 1 1 8 0a4 4 0 0 1-8 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsQuestionNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsQuestionNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
