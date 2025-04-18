import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DropboxLogoIcon],svg[fluent-mdl2-dropbox-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m668 249l356 297l-513 316l-351-281zm-508 895l351-282l513 317l-356 296zm864 35l513-317l351 282l-508 331zm864-598l-351 281l-513-316l356-297zm-863 662l357 295l152-99v112l-509 305l-509-305v-112l152 99z"></svg:path>`,
})
export class FluentMdl2DropboxLogoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
