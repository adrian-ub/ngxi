import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKn1x1Icon],svg[flag-kn-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagKn1x10"><svg:path fill-opacity=".7" d="M151.7-.3h745.1v745H151.7z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagKn1x10)" transform="translate(-104.2 .2)scale(.68714)"><svg:path fill="#ffe900" d="M-5.3 0h1073.5v744H-5.3z"></svg:path><svg:path fill="#35a100" d="m-5.8 0l1.2 536.4L830.7-.4z"></svg:path><svg:path fill="#c70000" d="m1069.5 744l-1.9-557.7L225 744.5l844.5-.4z"></svg:path><svg:path fill="#000001" d="m-5.3 576.9l.7 167.9l182.3-.3L1068 147.6l-1-146L886.9 0z"></svg:path><svg:path fill="#fff" d="m818 269l-64.2-2.2l-25.3 60.2l-14.3-61.5l-64.2-2.2l55.4-35.7L691 166l48.5 39.4l55.3-35.9l-25.4 60.2zM417.5 529.6l-64.3-2.3l-25.2 60.2l-14.3-61.5l-64.3-2.2l55.4-35.8l-14.4-61.4l48.5 39.4l55.3-35.9l-25.3 60.1z"></svg:path></svg:g>`,
})
export class FlagKn1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
