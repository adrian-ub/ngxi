import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faWindowsIcon],svg[fa-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M682 878v651L0 1435V878zm0-743v659H0V229zm982 743v786l-907-125V878zm0-878v794H757V125z"></svg:path>`,
})
export class FaWindowsIcon {
  readonly viewBox = input("0 0 1664 1664")
  readonly width = input("1em")
  readonly height = input("1em")
}
