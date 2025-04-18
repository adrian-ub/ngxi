import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWindowsIcon],svg[icon-park-twotone-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWindows0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="3.833" d="m6.75 11.063l12.938-1.725v12.075H6.75zm18.112-2.218L41.25 6.75v14.663H24.862zm0 18.605l16.388.383V41.25l-16.388-2.683zM6.75 26.588l12.938.311V37.8L6.75 35.62z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWindows0)"></svg:path>`,
})
export class IconParkTwotoneWindowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
