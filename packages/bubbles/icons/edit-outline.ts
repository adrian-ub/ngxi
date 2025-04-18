import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesEditOutlineIcon],svg[bubbles-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.712 16.386L9 16.916l.53-3.716l9.546-9.546a2.252 2.252 0 0 1 3.182 3.186z"></svg:path><svg:path d="M5.25 15h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h19.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3"></svg:path></svg:g>`,
})
export class BubblesEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
