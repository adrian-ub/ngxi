import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignObjectStorageIcon],svg[tdesign-object-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a5 5 0 0 0-5 5v2H6c-.78 0-1.805.302-2.62.964C2.598 12.6 2 13.572 2 15c0 1.414.615 2.388 1.42 3.032c.836.67 1.866.968 2.58.968c.973 0 2.239-.015 3.263-.521c.485-.24.9-.585 1.203-1.097c.306-.517.534-1.27.534-2.382v-1.086l-1.5 1.5L8.086 14L12 10.086L15.914 14L14.5 15.414l-1.5-1.5V15c0 1.387-.286 2.51-.812 3.4a4.8 4.8 0 0 1-2.04 1.872C8.674 21 6.979 21 6.056 21H6c-1.168 0-2.638-.452-3.83-1.407C.943 18.613 0 17.086 0 15c0-2.072.903-3.6 2.12-4.589A6.45 6.45 0 0 1 5 9.093V9a7 7 0 0 1 14 0v.093a6.45 6.45 0 0 1 2.88 1.318C23.099 11.401 24 12.928 24 15c0 2.076-.907 3.614-2.205 4.607C20.529 20.575 18.93 21 17.5 21h-4v-2h4c1.07 0 2.221-.325 3.08-.982C21.407 17.386 22 16.424 22 15c0-1.428-.598-2.4-1.38-3.036C19.804 11.302 18.78 11 18 11h-1V9a5 5 0 0 0-5-5"></svg:path>`,
})
export class TdesignObjectStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
