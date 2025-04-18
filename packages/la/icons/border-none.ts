import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBorderNoneIcon],svg[la-border-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4h2V7h2V5zm6 0v2h4V5zm6 0v2h4V5zm6 0v2h2v2h2V5zm-8 4v4h2V9zM5 11v4h2v-4zm20 0v4h2v-4zM9 15v2h4v-2zm6 0v2h2v-2zm4 0v2h4v-2zM5 17v4h2v-4zm20 0v4h2v-4zm-10 2v4h2v-4zM5 23v4h4v-2H7v-2zm20 0v2h-2v2h4v-4zm-14 2v2h4v-2zm6 0v2h4v-2z"></svg:path>`,
})
export class LaBorderNoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
