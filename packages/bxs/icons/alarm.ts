import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsAlarmIcon],svg[bxs-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c-4.878 0-9 4.122-9 9s4.122 9 9 9s9-4.122 9-9s-4.121-9-9-9m5 10h-6V8h2v4h4zm3.292-7.292l-3.01-3l1.412-1.417l3.01 3zM5.282 2.294L6.7 3.706l-2.99 3l-1.417-1.413z"></svg:path>`,
})
export class BxsAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
