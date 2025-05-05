import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeBbxIcon],svg[material-icon-theme-bbx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c62828" d="M128 704v128c0 70.692 57.308 128 128 128h608c17.728 0 32-14.272 32-32V704z"></svg:path><svg:path fill="#ffe082" d="M704 704v192h128V704z"></svg:path><svg:path fill="#fff8e1" d="M192 704v96c0 53.184 42.816 96 96 96h544a96 96 0 0 1-96-96a96 96 0 0 1 96-96z"></svg:path><svg:path fill="#ff1744" d="M320 832h192v192l-96-96l-96 96z"></svg:path><svg:path fill="#f44336" d="M256 64c-70.692 0-128 57.308-128 128v640c0 11.088 1.557 21.787 4.207 32.047C146.767 807.565 197.672 768.07 256 768h608c17.728 0 32-14.272 32-32V96c0-17.728-14.272-32-32-32z"></svg:path><svg:path fill="#ffeb3b" d="M256 192c-70.912 0-128 57.088-128 128v64c0-70.912 57.088-128 128-128h448v320H256c-70.912 0-128 57.088-128 128v64c0-70.912 57.088-128 128-128h512V192z"></svg:path>`,
})
export class MaterialIconThemeBbxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
