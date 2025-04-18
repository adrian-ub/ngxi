import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFourIcon],svg[mynaui-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.917 7c-1.042 3.75-4.167 6.875-4.167 6.875H15M13.438 17v-5"></svg:path>`,
})
export class MynauiFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
