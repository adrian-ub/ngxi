import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRupeeIcon],svg[mynaui-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 3.5h11m-11 4.722h11M14.292 20.5L6.5 12.944h2.75c6.111 0 6.111-9.444 0-9.444"></svg:path>`,
})
export class MynauiRupeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
