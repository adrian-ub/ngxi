import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximize24RegularIcon],svg[fluent-arrow-maximize-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.748 3.002h7.554l.1.014l.099.028l.061.026a.7.7 0 0 1 .218.15l.04.044l.061.082l.037.065l.039.09l.02.064l.013.064l.009.093v7.534a.75.75 0 0 1-1.493.102l-.006-.102l-.001-5.696l-13.94 13.945h5.69a.75.75 0 0 1 .744.65l.007.1a.75.75 0 0 1-.649.744l-.101.007H3.714l-.03-.004a.7.7 0 0 1-.187-.04l-.09-.038l-.018-.01a.75.75 0 0 1-.384-.554l-.007-.104v-7.504a.75.75 0 0 1 1.493-.102l.007.102v5.692l13.94-13.943h-5.69a.75.75 0 0 1-.743-.647l-.007-.102a.75.75 0 0 1 .648-.743z"></svg:path>`,
})
export class FluentArrowMaximize24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
