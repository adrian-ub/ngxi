import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRotate360Icon],svg[tabler-rotate-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 16h4v4"></svg:path><svg:path d="M19.458 11.042c.86-2.366.722-4.58-.6-5.9c-2.272-2.274-7.185-1.045-10.973 2.743s-5.017 8.701-2.744 10.974c2.227 2.226 6.987 1.093 10.74-2.515"></svg:path></svg:g>`,
})
export class TablerRotate360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
