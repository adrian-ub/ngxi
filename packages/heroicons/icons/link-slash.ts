import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsLinkSlashIcon],svg[heroicons-link-slash-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615l1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5q-.388.39-.661.84m1.903 6.405a4.5 4.5 0 0 1-1.242-.88a4.5 4.5 0 0 1-1.062-1.683m6.587 2.345l5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99L8.898 8.9"></svg:path>`,
})
export class HeroiconsLinkSlashIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
