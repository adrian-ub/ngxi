import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterWIcon],svg[gravity-ui-circle-letter-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.712 5.763a.75.75 0 1 0-1.424.474l1.5 4.5a.75.75 0 0 0 1.424 0L8 8.372l.788 2.365a.75.75 0 0 0 1.423 0l1.5-4.5a.75.75 0 1 0-1.422-.474L9.5 8.128l-.788-2.365a.75.75 0 0 0-1.424 0L6.5 8.128z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterWIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
