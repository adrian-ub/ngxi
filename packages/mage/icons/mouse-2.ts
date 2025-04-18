import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMouse2Icon],svg[mage-mouse-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.5 9.286C19.5 5.538 16.142 2.5 12 2.5S4.5 5.538 4.5 9.286v5.428c0 3.748 3.358 6.786 7.5 6.786s7.5-3.038 7.5-6.786z"></svg:path><svg:path d="M13.743 10.421c0-.986-.784-1.785-1.75-1.785c-.967 0-1.75.8-1.75 1.785v1.429c0 .986.783 1.786 1.75 1.786c.966 0 1.75-.8 1.75-1.786zM12 8.636V2.5"></svg:path></svg:g>`,
})
export class MageMouse2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
