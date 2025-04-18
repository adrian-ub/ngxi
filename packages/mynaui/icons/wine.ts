import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiWineIcon],svg[mynaui-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.4 21h7.2M12 21v-6.75m-.75 0h1.5a5 5 0 0 0 5-5V3.5a.5.5 0 0 0-.5-.5H6.75a.5.5 0 0 0-.5.5v5.75a5 5 0 0 0 5 5"></svg:path>`,
})
export class MynauiWineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
