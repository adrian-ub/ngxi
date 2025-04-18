import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagBh4x3Icon],svg[flag-bh-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v480H0"></svg:path><svg:path fill="#ce1126" d="M640 0H96l110.7 48L96 96l110.7 48L96 192l110.7 48L96 288l110.7 48L96 384l110.7 48L96 480h544"></svg:path>`,
})
export class FlagBh4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
