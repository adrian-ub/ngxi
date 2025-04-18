import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDesignPencilIcon],svg[iconoir-design-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path d="M8 21.168V14l4-7l4 7v7.168"></svg:path><svg:path d="M8 14s1.127 1 2 1s2-1 2-1s1.127 1 2 1s2-1 2-1"></svg:path></svg:g>`,
})
export class IconoirDesignPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
