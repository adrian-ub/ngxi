import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoveBottomIcon],svg[hugeicons-move-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22V12m0 10c.562 0 .99-.438 1.844-1.314l1.656-1.657M12 22c-.562 0-.99-.438-1.844-1.314L8.5 19.03"></svg:path><svg:circle cx="3" cy="3" r="3" transform="matrix(0 1 1 0 9 2)"></svg:circle></svg:g>`,
})
export class HugeiconsMoveBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
