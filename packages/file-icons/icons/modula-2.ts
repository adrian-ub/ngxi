import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsModula2Icon],svg[file-icons-modula-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 325H188V0h324zM151 0H0v325h151zM0 512h151V362H0zm188 0h324V362H188zm-37-187v37h37v-37z"></svg:path>`,
})
export class FileIconsModula2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
