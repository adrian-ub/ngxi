import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ChevronLeftIcon],svg[f7-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.805 47.723c.398.398.914.633 1.523.633c1.219 0 2.133-.915 2.133-2.133c0-.586-.234-1.125-.61-1.524L21.79 28.012l17.063-16.688c.375-.398.609-.96.609-1.523c0-1.219-.914-2.157-2.133-2.157c-.61 0-1.125.235-1.523.633L17.242 26.441c-.445.375-.703.961-.703 1.57c0 .587.258 1.126.703 1.571Z"></svg:path>`,
})
export class F7ChevronLeftIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
