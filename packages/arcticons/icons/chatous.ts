import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChatousIcon],svg[arcticons-chatous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.663 30.292a13.693 13.693 0 1 1 24.772-8.05m-.298 2.3a13.694 13.694 0 0 1-14.825 10.771"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.45 15.696c24.618 2.143-49.79 25.789-30.816 9.647m14.677 9.971c-1.59.426-1.793 1.814.53 4.137c-4.582-.43-7.866-4.507-9.506-7.348"></svg:path>`,
})
export class ArcticonsChatousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
