import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDiamondsFilledIcon],svg[tabler-diamonds-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.005c-.777 0-1.508.367-1.971.99L4.667 9.89c-.89 1.136-.89 3.083 0 4.227l5.375 6.911a2.457 2.457 0 0 0 3.93-.017l5.361-6.894c.89-1.136.89-3.083 0-4.227l-5.375-6.911A2.45 2.45 0 0 0 12 2.005"></svg:path>`,
})
export class TablerDiamondsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
