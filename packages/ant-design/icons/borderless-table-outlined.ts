import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignBorderlessTableOutlinedIcon],svg[ant-design-borderless-table-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M117 368h231v64H117zm559 0h241v64H676zm-264 0h200v64H412zm0 224h200v64H412zm264 0h241v64H676zm-559 0h231v64H117zm295-160V179h-64v666h64V592zm264-64V179h-64v666h64V432z"></svg:path>`,
})
export class AntDesignBorderlessTableOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
