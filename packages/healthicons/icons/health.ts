import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthIcon],svg[healthicons-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.671 6.8a5.54 5.54 0 0 1 5.737 0l2.037 1.246c2.858 1.747 6.113 2.136 9.383 2.528c1.057.127 2.115.253 3.162.426c0 0 .023 1.834-.001 2.666l-.209 7.151c-.18 6.133-2.907 11.948-7.585 16.174c-2.207 1.993-4.49 3.794-7.113 5.29a5.55 5.55 0 0 1-5.1.187c-3.029-1.44-5.711-3.266-8.16-5.477c-4.678-4.226-7.405-10.041-7.584-16.174l-.208-7.128c-.025-.844 0-2.689 0-2.689c.85-.1 1.716-.183 2.589-.266c3.853-.366 7.834-.744 11.1-2.74zM22 22v-7h4v7h7v4h-7v7h-4v-7h-7v-4z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
