import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOctagonFilledIcon],svg[tabler-octagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.3 2H8.7c-.562 0-1.016.201-1.407.593l-4.7 4.7A1.9 1.9 0 0 0 2 8.7v6.6c0 .562.201 1.016.593 1.407l4.7 4.7c.391.392.845.593 1.407.593h6.6c.562 0 1.016-.201 1.407-.593l4.7-4.7c.392-.391.593-.845.593-1.407V8.7c0-.562-.201-1.016-.593-1.407l-4.7-4.7A1.9 1.9 0 0 0 15.3 2"></svg:path>`,
})
export class TablerOctagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
