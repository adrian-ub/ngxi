import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiShardIcon],svg[oui-shard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.134 7.031L8 12.764l2.866-5.733L8 2.016zM8 0l4 7l-4 8l-4-8z"></svg:path>`,
})
export class OuiShardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
