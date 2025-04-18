import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsPicolispIcon],svg[file-icons-picolisp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m196.136 19.308l88.596 149.32l-68.687 118.46h-88.597l68.688-118.46l-45.792-77.646zM87.953 492.692l42.357-70.923h136.934l-44.298-77.223H87.008L0 492.692zm375.093-147.57h-69.093l-68.466-116.597l-44.299 75.732l67.97 117.512H512z"></svg:path>`,
})
export class FileIconsPicolispIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
