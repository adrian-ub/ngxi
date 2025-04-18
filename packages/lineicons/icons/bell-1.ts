import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBell1Icon],svg[lineicons-bell-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 2.001a.75.75 0 0 1 .75.75v.787a7.5 7.5 0 0 1 6.75 7.463v3.114l.692 1.846A2.25 2.25 0 0 1 18.087 19h-3.024a3.063 3.063 0 0 1-6.126 0h-3.02a2.25 2.25 0 0 1-2.108-3.04l.693-1.846V11a7.5 7.5 0 0 1 6.75-7.463V2.75a.75.75 0 0 1 .75-.75m-1.565 17a1.563 1.563 0 0 0 3.125 0zm-4.435-8v3.116c0 .178-.033.356-.095.523l-.693 1.848a.75.75 0 0 0 .702 1.013h12.171a.75.75 0 0 0 .702-1.013l-.693-1.848a1.5 1.5 0 0 1-.094-.523V11a6 6 0 1 0-12 0"></svg:path>`,
})
export class LineiconsBell1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
