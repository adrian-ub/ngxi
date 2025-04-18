import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerXboxAFilledIcon],svg[tabler-xbox-a-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.936 5.649c-.324-.865-1.548-.865-1.872 0l-3 8a1 1 0 0 0 .585 1.287l.111.035a1 1 0 0 0 1.176-.62L10.443 15h3.114l.507 1.351a1 1 0 1 0 1.872-.702zM12 10.848L12.807 13h-1.614z"></svg:path>`,
})
export class TablerXboxAFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
