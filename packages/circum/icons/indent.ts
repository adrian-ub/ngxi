import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumIndentIcon],svg[circum-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.437 4.064H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1m0 5.624h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1m0 5.624h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1m0 5.624H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 1 1 0 1M7.91 11.65a.49.49 0 0 1 0 .7l-2 2a.495.495 0 0 1-.7-.7l1.15-1.15H3.54a.5.5 0 0 1 0-1h2.81c-.38-.38-.76-.76-1.14-1.15a.495.495 0 0 1 .7-.7Z"></svg:path>`,
})
export class CircumIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
