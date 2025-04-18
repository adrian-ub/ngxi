import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileSymlinkIcon],svg[fluent-mdl2-file-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1920h640v128H128V0h1115l549 549v347h-128V640h-512V128H256zM1280 512h293l-293-293zm768 512v1024H1024V1024zm-128 128h-768v768h768zm-621 531l274-275h-165v-128h384v384h-128v-165l-275 274z"></svg:path>`,
})
export class FluentMdl2FileSymlinkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
