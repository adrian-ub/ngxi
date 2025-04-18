import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlashCheckmark16FilledIcon],svg[fluent-flash-checkmark-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.874 1a1 1 0 0 0-.959.714L1.032 8.036A.75.75 0 0 0 1.75 9h1.584l-1.28 4.389c-.384 1.316 1.324 2.2 2.178 1.128l1.306-1.64a5.5 5.5 0 0 1 4.782-7.873L10.252 5h-2.03l.994-2.649A1 1 0 0 0 8.28 1zM15 10.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.854-1.854L9.5 11.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708"></svg:path>`,
})
export class FluentFlashCheckmark16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
