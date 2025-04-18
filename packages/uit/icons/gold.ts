import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitGoldIcon],svg[uit-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 11h9.1c.3 0 .5-.3.4-.6l-1-6c0-.2-.3-.4-.5-.4h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5m1.4-6h6.2l.8 5H8.1zM22 13.4c0-.2-.2-.4-.5-.4h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5h9.1c.3 0 .5-.3.4-.6zM14.1 19l.8-5h6.2l.8 5zm-4.6-6h-7c-.2 0-.5.2-.5.4l-1 6v.1c0 .3.2.5.5.5h9.1c.3 0 .5-.3.4-.6l-1-6c0-.2-.3-.4-.5-.4m-7.4 6l.8-5h6.2l.8 5z"></svg:path>`,
})
export class UitGoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
