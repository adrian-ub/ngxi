import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFolderCheckIcon],svg[mynaui-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 6a2 2 0 0 1 2-2h1.745a2 2 0 0 1 1.322.5l2.272 2a2 2 0 0 0 1.322.5H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="m10.258 13.242l1.034 1.181c.095.109.266.1.35-.016l2.1-2.907"></svg:path></svg:g>`,
})
export class MynauiFolderCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
