import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBabyIcon],svg[mynaui-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1M12.25 3a2.25 2.25 0 1 0 1.5 3.927m-4 3.373c-.214-.19-.473-.3-.75-.3s-.536.11-.75.3m7.5 0c-.214-.19-.473-.3-.75-.3s-.536.11-.75.3"></svg:path></svg:g>`,
})
export class MynauiBabyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
