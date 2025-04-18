import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciInfoCircleIcon],svg[ci-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10ZM9.99 10.99V13h1v4h3.02v-2H13l.01-4.009l-3.02-.001Zm1-3.99v2.019h2.02V7h-2.02Z"></svg:path>`,
})
export class CiInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
