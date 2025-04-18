import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSplitVerticalIcon],svg[mdi-split-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12.984 5.016H21v13.968h-8.016V5.016zM3 5.016h8.016v1.968H3V5.016zm0 6V9h8.016v2.016H3zm0 7.968v-1.968h8.016v1.968H3zM3 15v-2.016h8.016V15H3z" fill="currentColor"></svg:path>`,
})
export class MdiSplitVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
