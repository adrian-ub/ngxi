import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMergeIcon],svg[oui-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.352 6H2.5a.5.5 0 0 1 0-1h4.852L5.12 2.721a.4.4 0 0 1 .055-.616a.55.55 0 0 1 .705.048l3 3.062c.16.164.16.405 0 .57l-3 3.062A.53.53 0 0 1 5.5 9a.54.54 0 0 1-.325-.106c-.21-.157-.235-.433-.055-.616zm1.296 4H13.5a.5.5 0 0 1 0 1H8.648l2.232 2.278c.18.183.155.46-.055.617A.54.54 0 0 1 10.5 14a.53.53 0 0 1-.38-.153l-3-3.063a.397.397 0 0 1 0-.568l3-3.063a.55.55 0 0 1 .705-.047a.4.4 0 0 1 .055.616z"></svg:path>`,
})
export class OuiMergeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
