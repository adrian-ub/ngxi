import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainJhipsterIcon],svg[devicon-plain-jhipster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110.449 38.247c-13.093-.152-33.77 9.322-46.311 15.793c-18.314-9.337-54.287-25.22-58.36-8.215C.288 68.745-5.883 86.17 11.034 89.39c11.77 2.24 37.984-12.964 52.866-22.432c14.821 9.448 41.307 24.86 53.117 22.567c16.896-3.283 10.67-20.782 5.127-43.777c-1.287-5.34-5.693-7.43-11.695-7.5z"></svg:path>`,
})
export class DeviconPlainJhipsterIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
