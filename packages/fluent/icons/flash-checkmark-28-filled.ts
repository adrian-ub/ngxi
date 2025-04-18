import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlashCheckmark28FilledIcon],svg[fluent-flash-checkmark-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.408 2.852A1.33 1.33 0 0 1 9.65 2h8.515c.927 0 1.571.922 1.252 1.792L17.326 9.5h4.837c1.178 0 1.777 1.416.957 2.262l-1.312 1.352a7.5 7.5 0 0 0-8.652 8.916l-3.37 3.473c-1.14 1.175-3.106.117-2.753-1.482l1.66-7.521H5.918a1.917 1.917 0 0 1-1.787-2.61zM27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-2.646-2.854a.5.5 0 0 0-.708 0L19 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentFlashCheckmark28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
