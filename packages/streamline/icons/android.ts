import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAndroidIcon],svg[streamline-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3 13.5v-8a4 4 0 0 1 8 0v8M3 11h8"></svg:path><svg:path d="M.5 10V8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2M11 .5L9.28 2.22M3 .5l1.72 1.72"></svg:path></svg:g>`,
})
export class StreamlineAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
