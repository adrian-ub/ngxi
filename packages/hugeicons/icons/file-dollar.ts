import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileDollarIcon],svg[hugeicons-file-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 9.91V7.817c0-1.693 0-2.54-.267-3.216c-.431-1.087-1.342-1.944-2.497-2.35C16.517 2 15.618 2 13.819 2c-3.149 0-4.723 0-5.98.441c-2.021.71-3.616 2.21-4.37 4.113C3 7.737 3 9.219 3 12.182v2.545c0 3.07 0 4.604.848 5.67q.367.461.856.805C5.836 22 7.467 22 10.728 22h.773c.534 0 1.533 0 2-.003M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.45.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.174-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.001 2"></svg:path><svg:path d="M20.753 15.811c.104-1.264-1.83-2.297-3.309-1.604c-1.847.865-1.686 3.052.595 3.168c1.015.052 1.903-.058 2.507.596c.603.654.865 2.32-.914 2.884s-3.633-.442-3.633-1.672M18.472 13v.978m0 7.242V22"></svg:path></svg:g>`,
})
export class HugeiconsFileDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
