import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphArrowThreeWay1Icon],svg[si-glyph-arrow-three-way-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M10.816 3.989a.577.577 0 0 0 0-.817L8.433.169a.58.58 0 0 0-.818 0L5.232 3.172a.577.577 0 0 0 0 .817h1.811v11.979h1.936V3.989z"></svg:path><svg:path d="m14.516 5.008l-2.986.35a.46.46 0 0 0-.454.462l.808.821l-1.86 1.89v7.47h1.956V9.359l1.29-1.306l.903.92a.46.46 0 0 0 .455-.462l.342-3.042a.46.46 0 0 0-.454-.461M5.002 8.842a.463.463 0 0 0-.462-.462L1.5 8.031a.46.46 0 0 0-.463.461l.35 3.04c0 .256.207.463.462.463l.884-.883l1.314 1.622v3.197l1.9.052v-4.025L4.129 9.714z"></svg:path></svg:g>`,
})
export class SiGlyphArrowThreeWay1Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
