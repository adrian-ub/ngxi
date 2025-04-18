import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMaskLoveIcon],svg[hugeicons-mask-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.142 13.442c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M6 8c1.466-.613 3.61-1 6-1s4.534.387 6 1M6 9c0 3.257-1.831 4.942-2.943 4.999a.09.09 0 0 1-.086-.05C2.157 12.498 2 10.789 2 9c0-3.314.895-6 2-6s2 2.686 2 6"></svg:path><svg:path d="M18.06 10.02A6.5 6.5 0 0 1 18 9c0-3.314.895-6 2-6s2 2.686 2 6c0 .38 0 1.14-.052 1.52M11 19c-2.96-.22-6.26-1.96-8-5"></svg:path></svg:g>`,
})
export class HugeiconsMaskLoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
