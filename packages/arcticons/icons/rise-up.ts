import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRiseUpIcon],svg[arcticons-rise-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25 44.5c4.577-8.419-4.603-5.928-1.944-14.906c.272-.774.343-1.186-.559-1.235c-3.775-.929-6.664-5.096-8.036-8.606c-3.611-8.37 4.01-19.29 13.213-15.433c4.629 2.034 7.6 7.972 6.526 12.933c-1.058 4.482-4.009 9.715-8.578 11.179c-.404.14-.763-.087-.89.215c-.056.555.677 1.545.644 2.074c-.326.172-2.209.07-2.625.087"></svg:path>`,
})
export class ArcticonsRiseUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
