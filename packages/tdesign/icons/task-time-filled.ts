import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskTimeFilledIcon],svg[tdesign-task-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M3 3h3v4h12V3h3v8.674A7 7 0 0 0 13.101 23H3z"></svg:path><svg:path fill="currentColor" d="M12.5 18a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m7.914 1L19 17.586v-1.834h-2v2.662l2 2z"></svg:path>`,
})
export class TdesignTaskTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
