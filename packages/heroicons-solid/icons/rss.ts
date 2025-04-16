import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidRssIcon],svg[heroicons-solid-rss-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 3a1 1 0 0 0 0 2c5.523 0 10 4.477 10 10a1 1 0 1 0 2 0C17 8.373 11.627 3 5 3"></svg:path><svg:path d="M4 9a1 1 0 0 1 1-1a7 7 0 0 1 7 7a1 1 0 1 1-2 0a5 5 0 0 0-5-5a1 1 0 0 1-1-1m-1 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path></svg:g>`,
})
export class HeroiconsSolidRssIcon {
  readonly viewBox = input('0 0 20 20')
  readonly width = input('1em')
  readonly height = input('1em')
}
