import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReadingModeMobile24FilledIcon],svg[fluent-reading-mode-mobile-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 2.001a2.25 2.25 0 0 1 2.245 2.096L20 4.25v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.75V4.251a2.25 2.25 0 0 1 2.096-2.245l.154-.005zm-5.502 10.996H7.75l-.102.007a.75.75 0 0 0 0 1.487l.102.006h4.498l.102-.006a.75.75 0 0 0 0-1.487zM16.25 10h-8.5l-.102.006a.75.75 0 0 0 0 1.487l.102.007h8.5l.102-.007a.75.75 0 0 0 0-1.487zm0-2.999h-8.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h8.5l.102-.007a.75.75 0 0 0 0-1.486z"></svg:path>`,
})
export class FluentReadingModeMobile24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
