import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNext32FilledIcon],svg[fluent-next-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.002 5a1 1 0 1 1 2 0v22a1 1 0 0 1-2 0zM3.999 6.504c0-2.002 2.236-3.192 3.897-2.073l14.003 9.432A2.5 2.5 0 0 1 21.912 18L7.909 27.56c-1.66 1.132-3.91-.056-3.91-2.065z"></svg:path>`,
})
export class FluentNext32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
