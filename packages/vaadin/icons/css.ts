import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCssIcon],svg[vaadin-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.1 11C5.5 11 6 10 6 10l-.8-.5s-.3.5-1 .5S3 9.1 3 7.8C3 6.6 3.6 6 4.2 6c.5 0 .9.4.9.4l.8-.6S5.2 5 4.2 5C3.1 5 2 5.9 2 7.8S2.9 11 4.1 11m4.6-1.1c-.3.1-.7 0-1-.4l-.8.5c.4.6 1 1 1.6 1c.1 0 .3 0 .4-.1c.7-.2 1.1-.8 1.1-1.6c0-1.2-.8-1.6-1.3-1.8c-.5-.3-.7-.4-.7-.8s.1-.7.6-.7c.3 0 .6.4.6.4l.8-.6c-.2-.3-.7-.8-1.4-.8C7.7 5 7 5.6 7 6.6c0 1.1.7 1.5 1.2 1.8c.6.2.8.4.8.9c0 .3 0 .6-.3.6m4 0c-.3.1-.7 0-1-.4l-.8.5c.4.6 1 1 1.6 1c.1 0 .3 0 .4-.1c.7-.2 1.1-.8 1.1-1.6c0-1.2-.8-1.6-1.3-1.8c-.5-.3-.7-.4-.7-.8s.1-.7.6-.7c.3 0 .6.4.6.4l.8-.6c-.2-.3-.7-.8-1.4-.8c-.9 0-1.6.6-1.6 1.6c0 1.1.7 1.5 1.2 1.8c.6.2.8.4.8.9c0 .3 0 .6-.3.6M0 0v16h16V0zm15 15H1V1h14z"></svg:path>`,
})
export class VaadinCssIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
