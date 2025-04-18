import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyReceiveFlow02Icon],svg[hugeicons-money-receive-flow-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 5q.517.075 1 .187c.591.137.887.205 1.241.488c.202.161.454.48.565.715C22 6.8 22 7.2 22 7.997V18.86c0 .993-1.04 1.675-2 1.453c-.92-.212-1.934-.33-3-.33c-1.917 0-3.668.381-5 1.009S8.917 22 7 22a13.4 13.4 0 0 1-3-.33c-.591-.137-.887-.205-1.241-.488a2.4 2.4 0 0 1-.565-.714C2 20.056 2 19.658 2 18.86V7.997c0-.993 1.04-1.675 2-1.453q.484.111 1 .187"></svg:path><svg:path d="M14.5 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 1v.009m13-2.017v.01M12 2v4M8 5v2m8-4v2"></svg:path></svg:g>`,
})
export class HugeiconsMoneyReceiveFlow02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
