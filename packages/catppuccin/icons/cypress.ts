import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCypressIcon],svg[catppuccin-cypress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.5 9.393c-.476.873-1.446 1.308-2.376 1.065S3.532 9.353 3.501 8.347s.578-1.91 1.491-2.216c.913-.305 1.908.064 2.436.903m3.072 2.968L8.5 6m-.503 8.5c.367-.048.527-.073.731-.21c.126-.106.245-.28.302-.433L12.5 6"></svg:path><svg:path d="M7.964 14.5a6.5 6.5 0 1 1 3.838-1.228"></svg:path></svg:g>`,
})
export class CatppuccinCypressIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
