import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCherryLineIconIcon],svg[arcticons-cherry-line-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.262 23.517a8.756 8.756 0 0 1 8.761 8.761c0 4.833-3.918 8.762-8.761 8.762c-4.833 0-8.762-3.93-8.762-8.762c0-4.843 3.929-8.761 8.762-8.761m19.477 0c4.832 0 8.761 3.918 8.761 8.761c0 4.833-3.929 8.762-8.761 8.762c-4.843 0-8.762-3.93-8.762-8.762a8.756 8.756 0 0 1 8.762-8.761"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.739 23.023C32.762 15.722 26.92 9.881 20.103 6.96c2.437 6.818 1.46 12.66-2.921 16.883"></svg:path>`,
})
export class ArcticonsCherryLineIconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
