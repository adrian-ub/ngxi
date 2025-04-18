import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTaskCheckedFilledIcon],svg[tdesign-task-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1H8v4h8z"></svg:path><svg:path fill="currentColor" d="M6 3H3v20h9.876A6.5 6.5 0 0 1 21 13.232V3h-3v4H6z"></svg:path><svg:path fill="currentColor" d="M12.344 19.414L13.758 18l2.828 2.828l5.657-5.656l1.415 1.414l-7.072 7.07z"></svg:path>`,
})
export class TdesignTaskCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
