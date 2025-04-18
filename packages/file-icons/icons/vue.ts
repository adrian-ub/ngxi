import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsVueIcon],svg[file-icons-vue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 34.512L256 477.488L0 34.512h41.601L256 405.502l214.399-370.99zM256 135.247L196.818 34.512h-89.766L256 292.248L404.948 34.512h-89.766z"></svg:path>`,
})
export class FileIconsVueIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
