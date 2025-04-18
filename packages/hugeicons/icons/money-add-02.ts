import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyAdd02Icon],svg[hugeicons-money-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 19c-1.332.622-3.083 1-5 1c-1.066 0-2.08-.117-3-.327c-.591-.136-.887-.203-1.241-.484a2.4 2.4 0 0 1-.565-.709C2 18.073 2 17.677 2 16.886V6.114c0-.985 1.04-1.661 2-1.441c.92.21 1.934.327 3 .327c1.917 0 3.668-.378 5-1s3.083-1 5-1c1.066 0 2.08.117 3 .327c.591.136.887.204 1.241.484c.202.16.454.476.565.709c.194.408.194.803.194 1.594V11.5M18.5 21v-7M15 17.5h7"></svg:path><svg:path d="M14.5 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 1v.009"></svg:path></svg:g>`,
})
export class HugeiconsMoneyAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
