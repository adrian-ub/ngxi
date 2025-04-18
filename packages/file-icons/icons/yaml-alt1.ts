import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsYamlAlt1Icon],svg[file-icons-yaml-alt1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 63.5h114.744L255.89 205.912L396.854 63.5H512l-383.215 385H14.58l184.334-185.014z"></svg:path>`,
})
export class FileIconsYamlAlt1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
