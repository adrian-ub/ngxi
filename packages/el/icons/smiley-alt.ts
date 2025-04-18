import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elSmileyAltIcon],svg[el-smiley-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0M286.157 286.157h627.686v627.686H286.157zm205.152 119.385c-37.424 0-67.749 30.325-67.749 67.749s30.325 67.749 67.749 67.749c37.425 0 67.822-30.325 67.822-67.749s-30.399-67.749-67.822-67.749m211.23 0c-37.424 0-67.749 30.325-67.749 67.749s30.325 67.749 67.749 67.749s67.749-30.325 67.749-67.749s-30.325-67.749-67.749-67.749M381.885 618.896c0 120.463 97.652 218.114 218.115 218.114s218.115-97.651 218.115-218.114z"></svg:path>`,
})
export class ElSmileyAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
