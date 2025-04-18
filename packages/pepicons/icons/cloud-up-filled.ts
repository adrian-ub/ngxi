import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCloudUpFilledIcon],svg[pepicons-cloud-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 14v-3.322l.752.587a1 1 0 0 0 1.231-1.576l-2.304-1.8a1 1 0 0 0-.673-.259a1 1 0 0 0-.674.259l-2.304 1.8a1 1 0 0 0 1.231 1.576l.741-.578V14H6a4 4 0 0 1 0-8h.126C6.57 4.275 8.136 3 10 3h1c1.9 0 3.49 1.325 3.899 3.101A4.002 4.002 0 0 1 14 14h-2.5Z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsCloudUpFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
