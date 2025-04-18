import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsGladeIcon],svg[file-icons-glade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M396.522 381.89H174.074l222.448-135.08zM64.71 94.335c17.97-18.586 60.013-49.096 104.936-49.096c-34.279 7.58-54.227 23.96-54.227 101.047c0 2.184-1.712 4.12-3.811 3.942c-36.228-3.074-83.505 11.376-97.698 56.087c1.125-48.234 32.83-93.394 50.8-111.98M0 456.341v27.956h512V27.703H163.728c-37.32 0-84.248 17.016-115.754 50.588C11.238 117.436 0 163.337 0 201.936V390.08l475.782-288.866V456.34z"></svg:path>`,
})
export class FileIconsGladeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
