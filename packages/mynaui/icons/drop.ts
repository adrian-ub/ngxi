import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiDropIcon],svg[mynaui-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.495 3c3.58 3.56 9.345 7.602 6.932 13.397C18.275 19.163 15.492 21 12.5 21s-5.775-1.837-6.927-4.603C3.161 10.607 8.92 6.561 12.495 3"></svg:path>`,
})
export class MynauiDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
