import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimWindowsIcon],svg[uim-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.03 4.832l8.147-1.11l.004 7.86l-8.144.046zm8.144 7.655l.006 7.867l-8.144-1.12l-.001-6.8zm.987-8.91L21.965 2v9.482l-10.804.085zm10.807 8.984L21.965 22l-10.804-1.525l-.015-7.932Z"></svg:path>`,
})
export class UimWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
