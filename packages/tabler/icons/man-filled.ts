import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerManFilledIcon],svg[tabler-man-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8c1.628 0 3.2.787 4.707 2.293a1 1 0 0 1-1.414 1.414c-.848-.848-1.662-1.369-2.444-1.587L15 16.064V21a1 1 0 0 1-2 0v-4h-2v4a1 1 0 0 1-2 0v-4.929l-.85-5.951c-.781.218-1.595.739-2.443 1.587a1 1 0 1 1-1.414-1.414C5.799 8.787 7.373 8 9 8zm-3-7a3 3 0 1 1-3 3l.005-.176A3 3 0 0 1 12 1"></svg:path>`,
})
export class TablerManFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
