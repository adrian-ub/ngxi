import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirRssFeedTagIcon],svg[iconoir-rss-feed-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 17c0-3-2-5-5-5m10 5c0-6-4-10-10-10m0 10.01l.01-.011"></svg:path><svg:path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></svg:path></svg:g>`,
})
export class IconoirRssFeedTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
