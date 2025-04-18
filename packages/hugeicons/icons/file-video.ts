import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileVideoIcon],svg[hugeicons-file-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18.5 17.146l.063-.045c1.058-.764 1.587-1.146 2.012-.961s.425.795.425 2.018v.684c0 1.223 0 1.834-.425 2.018c-.425.185-.954-.197-2.012-.96l-.063-.046M14.5 22h.5c1.65 0 2.475 0 2.987-.448c.513-.449.513-1.17.513-2.614v-.875c0-1.444 0-2.166-.513-2.614C17.475 15 16.65 15 15 15h-.5c-1.65 0-2.475 0-2.987.448c-.513.449-.513 1.17-.513 2.614v.875c0 1.444 0 2.166.513 2.614C12.025 22 12.85 22 14.5 22"></svg:path><svg:path d="M20 12.014V7.826c0-1.695 0-2.543-.268-3.22c-.43-1.089-1.342-1.947-2.497-2.353C16.517 2 15.617 2 13.818 2c-3.148 0-4.722 0-5.98.442c-2.02.71-3.615 2.213-4.37 4.118C3 7.745 3 9.23 3 12.196v2.55c0 3.073 0 4.61.848 5.677c.243.306.53.578.855.806c.76.537 1.745.713 3.297.771"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsFileVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
