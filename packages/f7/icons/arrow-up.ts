import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowUpIcon],svg[f7-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.988 50.137c1.22 0 2.11-.844 2.11-2.063V17.207l-.188-4.992l7.008 7.687l5.344 5.25c.375.375.937.563 1.476.563c1.172 0 2.04-.89 2.04-2.04c0-.562-.212-1.054-.657-1.523L29.56 6.566c-.446-.468-.985-.703-1.57-.703c-.563 0-1.102.235-1.548.703L10.88 22.152c-.445.47-.656.961-.656 1.524c0 1.148.867 2.039 2.015 2.039c.563 0 1.125-.188 1.5-.563l5.32-5.25l7.032-7.71l-.188 5.015v30.867c0 1.219.867 2.063 2.086 2.063"></svg:path>`,
})
export class F7ArrowUpIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
