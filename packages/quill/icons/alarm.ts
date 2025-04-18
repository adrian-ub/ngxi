import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillAlarmIcon],svg[quill-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M26.607 6.392a15 15 0 0 0-6.725-3.882m-7.764 0a15 15 0 0 0-6.725 3.882M16 9v8l-4 4m15-4c0 6.075-4.925 11-11 11S5 23.075 5 17S9.925 6 16 6s11 4.925 11 11"></svg:path>`,
})
export class QuillAlarmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
