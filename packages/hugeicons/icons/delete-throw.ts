import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeleteThrowIcon],svg[hugeicons-delete-throw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5"></svg:path><svg:path d="M9.5 12.5c.492-.506 1.8-2.5 2.5-2.5m2.5 2.5c-.492-.506-1.8-2.5-2.5-2.5m0 0v8M3 5.5h18m-4.945 0l-.682-1.408c-.454-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.034 2c-1.065 0-1.598 0-2.039.234a2 2 0 0 0-.278.18c-.396.303-.617.788-1.059 1.757L8.053 5.5"></svg:path></svg:g>`,
})
export class HugeiconsDeleteThrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
