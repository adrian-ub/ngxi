import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHatGraduation20FilledIcon],svg[fluent-hat-graduation-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074q-.105.095-.301.248a8 8 0 0 1-1.141.733A9.1 9.1 0 0 1 10 17a9.1 9.1 0 0 1-4.298-1.06a8 8 0 0 1-1.14-.733a6 6 0 0 1-.382-.322l-.023-.022A.5.5 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a3 3 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"></svg:path>`,
})
export class FluentHatGraduation20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
