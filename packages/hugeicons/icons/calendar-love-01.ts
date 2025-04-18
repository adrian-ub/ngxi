import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCalendarLove01Icon],svg[hugeicons-calendar-love-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.142 14.442c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M3 8h18m-3-6v2M6 2v2"></svg:path><svg:path d="M11.05 22c-4.03 0-6.046 0-7.298-1.354C2.5 19.293 2.5 17.114 2.5 12.756v-.513c0-4.357 0-6.536 1.252-7.89C5.004 3 7.02 3 11.05 3h1.9c4.03 0 6.046 0 7.298 1.354C21.477 5.682 21.5 7.804 21.5 12"></svg:path></svg:g>`,
})
export class HugeiconsCalendarLove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
