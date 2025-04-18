import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elTrashAltIcon],svg[el-trash-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m-93.091 224.341h186.182v57.422h217.09v105.688H289.819V281.763h217.09zm-183.764 243.53h553.71v507.788h-553.71z"></svg:path>`,
})
export class ElTrashAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
