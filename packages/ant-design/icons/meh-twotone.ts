import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignMehTwotoneIcon],svg[ant-design-meh-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372M288 421a48.01 48.01 0 0 1 96 0a48.01 48.01 0 0 1-96 0m384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8zm16-152a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96"></svg:path><svg:path fill="currentColor" d="M288 421a48 48 0 1 0 96 0a48 48 0 1 0-96 0m376 144H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m-24-144a48 48 0 1 0 96 0a48 48 0 1 0-96 0"></svg:path>`,
})
export class AntDesignMehTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
