import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceDeskForLaptopIcon],svg[guidance-desk-for-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M18.5 10.5h-13m13 0v-8h-13v8m13 0l.674 6.5H19c-1.95-.217-4.405-.5-7-.5s-5.05.283-7 .5h-.174l.674-6.5m5.5 4h2M3.5 7.06c-.403 0-.968.072-1.5.157L.608 21.5H.75s5.25-1 11.25-1s11.25 1 11.25 1h.087L22 7.217c-.532-.085-1.097-.157-1.5-.157"></svg:path>`,
})
export class GuidanceDeskForLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
