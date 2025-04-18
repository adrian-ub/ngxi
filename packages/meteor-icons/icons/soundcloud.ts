import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSoundcloudIcon],svg[meteor-icons-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 7v11m-3 0v-7m-6 6v-3m3-4v8m9 0h6a1 1 0 0 0 0-6a6 6 0 0 0-6-6Z"></svg:path>`,
})
export class MeteorIconsSoundcloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
