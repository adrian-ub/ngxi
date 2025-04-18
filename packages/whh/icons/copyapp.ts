import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCopyappIcon],svg[whh-copyapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m832 448l192 384q-179-12-329-38q-57-10-118-27l-129 65l-30-76l-66 44l-161-437l-173 58l-18-37l145-145l-17-47l74 25l-10-25l96 32l118 245q51-38 73-50l65-35q26 8 57 18L896 0L796 449z"></svg:path>`,
})
export class WhhCopyappIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
