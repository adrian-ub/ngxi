import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneySendFlow02Icon],svg[hugeicons-money-send-flow-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 19q.517-.076 1-.187c.591-.137.887-.205 1.241-.488c.202-.161.454-.48.565-.715c.194-.41.194-.81.194-1.607V5.14c0-.993-1.04-1.675-2-1.453c-.92.212-1.934.33-3 .33c-1.917 0-3.668-.381-5-1.009S8.917 2 7 2c-1.066 0-2.08.118-3 .33c-.591.137-.887.205-1.241.488c-.202.16-.454.48-.565.714C2 3.944 2 4.342 2 5.14v10.863c0 .993 1.04 1.675 2 1.453q.484-.112 1-.187"></svg:path><svg:path d="M14.5 10.5a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0m-9-1v-.009m13 2.017v-.01M12 22v-4m-4 1v-2m8 4v-2"></svg:path></svg:g>`,
})
export class HugeiconsMoneySendFlow02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
