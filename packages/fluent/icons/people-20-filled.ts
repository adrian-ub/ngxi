import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeople20FilledIcon],svg[fluent-people-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 10a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5m5.687 5.145c.53.217 1.204.355 2.062.355c4 0 4-3 4-3A1.5 1.5 0 0 0 17 11h-4.628c.393.476.629 1.085.629 1.75v.356a3 3 0 0 1-.017.252a5 5 0 0 1-.546 1.787M17 7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M1.5 13a2 2 0 0 1 2-2H10a2 2 0 0 1 2 2s0 4-5.25 4s-5.25-4-5.25-4m11.5.106l-.003.064Z"></svg:path>`,
})
export class FluentPeople20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
