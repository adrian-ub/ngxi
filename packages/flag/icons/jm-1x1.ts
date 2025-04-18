import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagJm1x1Icon],svg[flag-jm-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#000001" d="m0 0l256 256L0 512zm512 0L256 256l256 256z"></svg:path><svg:path fill="#090" d="m0 0l256 256L512 0zm0 512l256-256l256 256z"></svg:path><svg:path fill="#fc0" d="M512 0h-47.7L0 464.3V512h47.7L512 47.7z"></svg:path><svg:path fill="#fc0" d="M0 0v47.7L464.3 512H512v-47.7L47.7 0z"></svg:path></svg:g>`,
})
export class FlagJm1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
