import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosUdemyIconIcon],svg[logos-udemy-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A435F0" d="M255.982 147.795L127.973 73.898L0 147.795V73.898L127.991 0L256 73.898v73.897z"></svg:path><svg:path d="M0 209.85h67.047v162.9c0 42.086 31.429 62.601 60.944 62.601c29.77 0 60.962-21.061 60.962-63.166V209.85H256v166.78c0 38.771-12.189 68.687-36.566 89.202c-24.396 20.497-54.859 30.481-92.008 30.481c-37.113 0-67.594-9.966-91.406-30.48C12.189 445.334 0 416.53 0 378.287z"></svg:path>`,
})
export class LogosUdemyIconIcon {
  readonly viewBox = input("0 0 256 497")
  readonly width = input("0.52em")
  readonly height = input("1em")
}
