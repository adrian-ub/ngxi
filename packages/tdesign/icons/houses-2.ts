import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHouses2Icon],svg[tdesign-houses-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v2h9.566l4.2 7H21v11H3V11H1.233l4.2-7H7V2zm-4 9v9h4v-5h6v5h4v-9zm14.233-2l-1.8-3H6.566l-1.8 3zM13 20v-3h-2v3z"></svg:path>`,
})
export class TdesignHouses2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
