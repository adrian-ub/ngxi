import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCall24FilledIcon],svg[fluent-call-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.772 2.439l1.077-.344c1.008-.322 2.086.199 2.518 1.217l.86 2.028c.375.883.167 1.922-.514 2.568L9.82 9.706q.175 1.614 1.084 3.177a8.7 8.7 0 0 0 2.271 2.595l2.276-.76c.862-.287 1.801.044 2.33.821l1.232 1.81c.616.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.976 1.114-3.052.778q-3.808-1.188-7.003-7.053q-3.199-5.875-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404"></svg:path>`,
})
export class FluentCall24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
