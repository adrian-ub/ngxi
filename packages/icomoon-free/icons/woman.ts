import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeWomanIcon],svg[icomoon-free-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 9 1.5M11.234 8L12 7.445L9.917 4.224a.5.5 0 0 0-.417-.225h-4a.5.5 0 0 0-.417.225L3 7.445L3.766 8l1.729-2.244l.601 1.402l-2.095 3.841h1.917l.333 5h1v-5h.5v5h1l.333-5h1.917L8.906 7.157l.601-1.402l1.729 2.244z"></svg:path>`,
})
export class IcomoonFreeWomanIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
