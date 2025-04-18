import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsInspectCodeIcon],svg[hugeicons-inspect-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path><svg:path d="m14.5 9.5l.92.793c.387.333.58.5.58.707s-.193.374-.58.707l-.92.793m-7-3l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707l.92.793m4.5-4l-2 5"></svg:path></svg:g>`,
})
export class HugeiconsInspectCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
