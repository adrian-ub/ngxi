import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoNpmIcon],svg[fontisto-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.534V9.871h-1.334v2.666zM24 7.2H0v8h6.666v1.334H12v-1.333h12zM6.666 8.534v5.337H5.333v-4H3.999v4H1.333V8.537zm6.667 0v5.337h-2.666v1.334H8.001V8.539zm9.333 0v5.337h-1.333v-4h-1.334v4h-1.334v-4h-1.333v4h-2.667V8.537z"></svg:path>`,
})
export class FontistoNpmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
