import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTreeIcon],svg[mynaui-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17h7l-4.5-6.5h3L12 3l-5.5 7.5h3L5 17zm0 0v4"></svg:path>`,
})
export class MynauiTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
