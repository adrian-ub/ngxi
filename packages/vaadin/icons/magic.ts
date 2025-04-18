import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMagicIcon],svg[vaadin-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h3v1H0zm5-5h1v3H5zm1 11H5V8.5l1 1zm5-5H9.5l-1-1H11zM3.131 7.161l.707.707l-2.97 2.97l-.707-.707zm7-7l.707.707l-2.97 2.97l-.707-.707zM.836.199l3.465 3.465l-.707.707L.129.906zM6.1 4.1L4 6.1l9.8 9.9l2.2-2.1zm0 1.4L8.5 8l-.6.6l-2.5-2.5z"></svg:path>`,
})
export class VaadinMagicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
