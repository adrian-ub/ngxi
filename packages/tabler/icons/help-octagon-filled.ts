import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHelpOctagonFilledIcon],svg[tabler-help-octagon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.897 1a4 4 0 0 1 2.664 1.016l.165.156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006.227v5.794a4 4 0 0 1-1.016 2.664l-.156.165l-4.1 4.1a4 4 0 0 1-2.603 1.168l-.227.006H9.103a4 4 0 0 1-2.664-1.017l-.165-.156l-4.1-4.1a4 4 0 0 1-1.168-2.604L1 14.897V9.103a4 4 0 0 1 1.016-2.664l.156-.165l4.1-4.1a4 4 0 0 1 2.605-1.168L9.104 1zM12 15a1 1 0 0 0-.993.883L11 16l.007.127a1 1 0 0 0 1.986 0L13 16.01l-.007-.127A1 1 0 0 0 12 15m1.368-6.673a2.98 2.98 0 0 0-3.631.728a1 1 0 0 0 1.44 1.383l.171-.18a.98.98 0 0 1 1.11-.15a1 1 0 0 1-.34 1.886l-.232.012A1 1 0 0 0 11.997 14a3 3 0 0 0 1.371-5.673"></svg:path>`,
})
export class TablerHelpOctagonFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
