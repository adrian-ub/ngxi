import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoveTopIcon],svg[hugeicons-move-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="3" cy="3" r="3" transform="matrix(0 -1 -1 0 15 22)"></svg:circle><svg:path d="M12 2v10m0-10c-.562 0-.99.438-1.844 1.314L8.5 4.971M12 2c.562 0 .99.438 1.844 1.314L15.5 4.97"></svg:path></svg:g>`,
})
export class HugeiconsMoveTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
