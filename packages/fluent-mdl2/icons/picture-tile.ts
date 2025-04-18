import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PictureTileIcon],svg[fluent-mdl2-picture-tile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 384q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19M1920 0v1920H0V0zm-896 896h549l-357-358l-192 193zM128 128v421l192-191l539 538h37V128zm0 768h549L320 538L128 731zm0 896h549l-357-358l-192 193zm768-768H128v421l192-191l539 538h37zm128 768h549l-357-358l-192 193zm768-768h-768v421l192-191l539 538h37zm0-128V128h-768v421l192-191l539 538zm-192-640q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19M704 1280q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m896 0q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19"></svg:path>`,
})
export class FluentMdl2PictureTileIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
