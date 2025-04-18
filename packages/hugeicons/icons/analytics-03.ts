import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAnalytics03Icon],svg[hugeicons-analytics-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 20.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75S9 3.59 9 4v16c0 .41-.34.75-.75.75m-4 0c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75S5 8.59 5 9v11c0 .41-.34.75-.75.75M11.5 20c0 .41.34.75.75.75s.75-.34.75-.75v-9c0-.41-.34-.75-.75-.75s-.75.34-.75.75zm4.75.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v13c0 .41-.34.75-.75.75M19.5 20c0 .41.34.75.75.75s.75-.34.75-.75v-6c0-.41-.34-.75-.75-.75s-.75.34-.75.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsAnalytics03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
