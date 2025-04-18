import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHeart24pxIcon],svg[healthicons-heart-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.781 3C5.018 3 3 5.986 3 9.207c0 .865.13 1.693.36 2.48q.169.577.404 1.126C5.938 17.899 12 21 12 21s6.062-3.1 8.236-8.187q.235-.547.404-1.126c.23-.787.36-1.615.36-2.48C21 5.987 18.982 3 16.219 3c-1.885 0-3.291 1.061-4.173 2.902a.051.051 0 0 1-.092 0C11.072 4.062 9.666 3 7.78 3"></svg:path>`,
})
export class HealthiconsHeart24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
