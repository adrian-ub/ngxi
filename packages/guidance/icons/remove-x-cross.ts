import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceRemoveXCrossIcon],svg[guidance-remove-x-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 8.465L18.965 1.5l.177.177l.152.228a10.1 10.1 0 0 0 2.8 2.801l.23.153l.176.177L15.536 12l6.964 6.965l-.177.176l-.228.153a10.1 10.1 0 0 0-2.801 2.8l-.153.23l-.176.176L12 15.536L5.036 22.5l-.177-.177l-.153-.228a10.1 10.1 0 0 0-2.8-2.801l-.23-.153l-.176-.176L8.465 12L1.5 5.036l.177-.177l.229-.153a10.1 10.1 0 0 0 2.8-2.8l.153-.23l.177-.176z"></svg:path>`,
})
export class GuidanceRemoveXCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
